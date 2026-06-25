const mongoose = require('mongoose');

const gamificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    totalXp: {
      type: Number,
      default: 0,
    },
    currentLevel: {
      type: String,
      default: 'Degrau 1',
    },
    streakDays: {
      type: Number,
      default: 0,
    },
    lastActiveDate: {
      type: Date,
      default: null,
    },
    weeklyXp: {
      type: Number,
      default: 0,
    },
    history: [
      {
        xp: Number,
        date: { type: Date, default: Date.now },
        messageId: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Mongoose previne sobreposição de modelos
const Gamification = mongoose.models.Gamification || mongoose.model('Gamification', gamificationSchema);

module.exports = Gamification;
