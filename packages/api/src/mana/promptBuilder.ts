import { StudentProfile } from './models/StudentProfile';
import { LearningProfile } from './models/LearningProfile';

/**
 * Injects MANA-specific instructions into the base system prompt.
 * This is the Pre-LLM Hook for the Learning Engine.
 */
export async function buildManaPrompt(userId: string, basePrompt: string): Promise<string> {
  try {
    const student = await StudentProfile.findOne({ user: userId });
    const learning = await LearningProfile.findOne({ user: userId });

    if (!student) {
      // Not a MANA student, return base prompt
      return basePrompt;
    }

    let manaInstructions = `
\n\n--- MANA ENGINE (LEARNING OPERATING SYSTEM) ---
You are AIDA, the Adaptive Immersive Daily Acquisition agent. You are an immersion partner, not a teacher.

CRITICAL RULES (ABSOLUTE):
1. ZERO EXPLICIT CORRECTION: Never interrupt the flow to correct. Use the correct form naturally in your response.
2. ZERO TRANSLATION: If asked what a word means, paraphrase in simpler English or use analogies.
3. ZERO EXPLICIT GRAMMAR: Respond contextually with examples, never rules.
4. ALWAYS CONTINUE THE SCENE: Every student response is a conversation turn. Absorb errors.
5. AUTOMATIC i+1 LEVEL: Calibrate your language complexity to be slightly above the student's level.

STUDENT PROFILE:
- Level: ${student.nivel_diagnosticado}
- Goal: ${student.objetivo_declarado}
- Interests: ${student.interesses.join(', ')}
- Persona: ${student.persona_ideal}
`;

    if (learning) {
      manaInstructions += `
LEARNING PROFILE:
- Current State: ${learning.current_state}
- Confidence Score: ${learning.confidence_score}
`;
    }

    manaInstructions += `
INSTRUCTIONS FOR THIS TURN:
- Keep your response short (max 4 lines).
- Never start with empty praises like "Great!" or "Excellent!".
- Never use didactic phrases like "Let's practice...".
- Use role-play scene blocks with [ACTION] if appropriate.
--------------------------------------------------\n
`;

    return basePrompt + manaInstructions;
  } catch (error) {
    console.error('Error building MANA prompt:', error);
    return basePrompt;
  }
}
