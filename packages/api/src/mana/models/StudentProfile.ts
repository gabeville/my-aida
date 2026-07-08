import mongoose, { Document, Schema } from 'mongoose';

export interface IStudentProfile extends Document {
  user: mongoose.Types.ObjectId;
  nivel_diagnosticado: string; // iniciante | basico | intermediario | avancado
  foco_principal: string;
  persona_ideal: string; // Jordan | Alexandra | Miles | Zack | Prof. Hayes
  idioma_alvo: string;
  interesses: string[];
  disponibilidade_diaria: string;
  objetivo_declarado: string;
  plano_atribuido: string;
  createdAt: Date;
  updatedAt: Date;
}

const StudentProfileSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    nivel_diagnosticado: { type: String, required: true, default: 'iniciante' },
    foco_principal: { type: String, required: true },
    persona_ideal: { type: String, required: true },
    idioma_alvo: { type: String, required: true, default: 'inglês' },
    interesses: [{ type: String }],
    disponibilidade_diaria: { type: String },
    objetivo_declarado: { type: String },
    plano_atribuido: { type: String },
  },
  {
    timestamps: true,
  }
);

export const StudentProfile = mongoose.models.StudentProfile || mongoose.model<IStudentProfile>('StudentProfile', StudentProfileSchema);
