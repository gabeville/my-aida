import mongoose, { Document, Schema } from 'mongoose';

export interface IAcquisitionMemory extends Document {
  user: mongoose.Types.ObjectId;
  structure_name: string; // e.g., "Present Perfect", "boarding pass"
  structure_type: string; // grammar | vocabulary | idiom
  status: string; // NEW | LEARNING | ACQUIRED
  introduced_at: Date;
  evidence_count: number;
  confidence_level: number;
  last_seen: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AcquisitionMemorySchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    structure_name: { type: String, required: true },
    structure_type: { type: String, required: true, default: 'grammar' },
    status: { type: String, required: true, default: 'NEW' },
    introduced_at: { type: Date, default: Date.now },
    evidence_count: { type: Number, default: 0 },
    confidence_level: { type: Number, default: 0.0 },
    last_seen: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// Compound index for efficient lookup
AcquisitionMemorySchema.index({ user: 1, structure_name: 1 }, { unique: true });

export const AcquisitionMemory = mongoose.models.AcquisitionMemory || mongoose.model<IAcquisitionMemory>('AcquisitionMemory', AcquisitionMemorySchema);
