import mongoose, { Document, Schema } from 'mongoose';

export interface ILearningProfile extends Document {
  user: mongoose.Types.ObjectId;
  current_state: string; // ex: FASE 1 - BABY
  confidence_score: number;
  last_assessment_date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const LearningProfileSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    current_state: { type: String, required: true, default: 'FASE 1' },
    confidence_score: { type: Number, default: 0 },
    last_assessment_date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const LearningProfile = mongoose.models.LearningProfile || mongoose.model<ILearningProfile>('LearningProfile', LearningProfileSchema);
