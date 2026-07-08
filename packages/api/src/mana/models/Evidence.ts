import mongoose, { Document, Schema } from 'mongoose';

export interface IEvidence extends Document {
  user: mongoose.Types.ObjectId;
  acquisition_memory_id: mongoose.Types.ObjectId;
  conversation_id: mongoose.Types.ObjectId;
  context_used: string;
  confidence_score: number;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
}

const EvidenceSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    acquisition_memory_id: { type: Schema.Types.ObjectId, ref: 'AcquisitionMemory', required: true },
    conversation_id: { type: Schema.Types.ObjectId, ref: 'Conversation', required: false },
    context_used: { type: String, required: true },
    confidence_score: { type: Number, required: true, default: 1.0 },
    timestamp: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Evidence = mongoose.models.Evidence || mongoose.model<IEvidence>('Evidence', EvidenceSchema);
