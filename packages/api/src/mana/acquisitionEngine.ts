import mongoose from 'mongoose';
import { AcquisitionMemory } from './models/AcquisitionMemory';
import { Evidence } from './models/Evidence';

interface ExtractedData {
  structures: string[];
  new_words: string[];
  confidence: number;
}

/**
 * The core pedagogical engine. Runs asynchronously after a conversation turn.
 * Uses an LLM to extract linguistic evidence from the interaction and updates memory.
 */
export async function runAcquisitionEngine(
  userId: string,
  studentMessage: string,
  agentResponse: string,
  conversationId?: string
) {
  try {
    // We do not await this in the main thread to avoid blocking the UI response.
    // This is fired and forgotten by the route.
    
    // 1. Call LLM to extract JSON
    const extracted = await extractLinguisticData(studentMessage, agentResponse);
    if (!extracted) return;

    // 2. Process Structures and Words
    const itemsToProcess = [...extracted.structures, ...extracted.new_words];

    for (const item of itemsToProcess) {
      // 3. Find or create AcquisitionMemory entry
      let memory = await AcquisitionMemory.findOne({ user: userId, structure_name: item });
      
      if (!memory) {
        memory = new AcquisitionMemory({
          user: userId,
          structure_name: item,
          structure_type: extracted.structures.includes(item) ? 'grammar' : 'vocabulary',
          status: 'NEW',
          introduced_at: new Date(),
          evidence_count: 0,
          confidence_level: 0,
        });
      }

      // 4. Create Evidence record
      const evidence = new Evidence({
        user: userId,
        acquisition_memory_id: memory._id,
        conversation_id: conversationId ? new mongoose.Types.ObjectId(conversationId) : null,
        context_used: studentMessage.substring(0, 200), // snippet of usage
        confidence_score: extracted.confidence,
      });

      await evidence.save();

      // 5. Update Memory stats and state machine
      memory.evidence_count += 1;
      // Exponential moving average for confidence or simple sum (simplified here)
      memory.confidence_level = (memory.confidence_level + extracted.confidence) / 2;
      memory.last_seen = new Date();

      // State transition logic
      if (memory.evidence_count > 3 && memory.confidence_level > 0.7) {
        memory.status = 'ACQUIRED';
      } else if (memory.evidence_count > 0) {
        memory.status = 'LEARNING';
      }

      await memory.save();
    }
  } catch (error) {
    console.error('[MANA] Acquisition Engine Error:', error);
  }
}

/**
 * Calls Groq (or configured LLM) to extract JSON structured output.
 */
async function extractLinguisticData(studentMsg: string, agentMsg: string): Promise<ExtractedData | null> {
  const apiKey = process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn('[MANA] No API key found for Acquisition Engine extraction.');
    return null;
  }

  const endpoint = process.env.GROQ_API_KEY 
    ? 'https://api.groq.com/openai/v1/chat/completions' 
    : 'https://api.openai.com/v1/chat/completions';
  
  const model = process.env.GROQ_API_KEY ? 'llama-3.3-70b-versatile' : 'gpt-4o-mini';

  const systemPrompt = `You are a linguistic extraction engine for an ESL learning system.
Analyze the following conversation turn between a Student and an AI Agent.
Identify any English grammatical structures (e.g. "Present Perfect", "Conditional") or complex vocabulary used BY THE STUDENT spontaneously.
Return ONLY a valid JSON object matching this schema:
{
  "structures": ["string"],
  "new_words": ["string"],
  "confidence": 0.0 to 1.0 (how confident are you that the student used them correctly and spontaneously, not just copying the agent)
}
Do not return markdown formatting, just the raw JSON object.`;

  const userPrompt = `Student said: "${studentMsg}"\nAgent replied: "${agentMsg}"`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${apiKey}\`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: 'json_object' },
        temperature: 0.1
      })
    });

    if (!response.ok) {
      console.error('[MANA] LLM Extraction failed:', await response.text());
      return null;
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content) as ExtractedData;
    return parsed;
  } catch (error) {
    console.error('[MANA] Parse error in LLM extraction:', error);
    return null;
  }
}
