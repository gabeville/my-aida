const Gamification = require('~/models/Gamification');
const { logger } = require('@librechat/data-schemas');

class GamificationService {
  /**
   * Processes an AI message text to extract XP and update user stats.
   * Expected format: ⚡ +[XP] XP | Streak: 🔥 [X] dias | Nível: [Current Level]
   */
  static async processMessage(message) {
    if (!message || !message.text || !message.user) return;

    try {
      const xpMatch = message.text.match(/⚡ \+([0-9]+) XP/);
      const levelMatch = message.text.match(/Nível: (.*?)(?:\n|$)/);
      
      if (!xpMatch) return; // Not a gamified message

      const gainedXp = parseInt(xpMatch[1], 10);
      let currentLevel = levelMatch ? levelMatch[1].trim() : 'Degrau 1';
      // Clean up markdown characters if any (like bold stars)
      currentLevel = currentLevel.replace(/[\*\_]/g, '').trim();

      // Find or create gamification doc for user
      let stats = await Gamification.findOne({ user: message.user });
      
      const now = new Date();
      let newStreak = stats ? stats.streakDays : 1;

      if (!stats) {
        stats = new Gamification({
          user: message.user,
          totalXp: gainedXp,
          currentLevel,
          streakDays: 1,
          lastActiveDate: now,
          weeklyXp: gainedXp,
          history: [{ xp: gainedXp, date: now, messageId: message.messageId }]
        });
      } else {
        // Streak calculation (simple daily reset logic)
        if (stats.lastActiveDate) {
          const lastDate = new Date(stats.lastActiveDate);
          
          // Normalize to start of day in UTC for simple day difference
          const date1 = Date.UTC(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
          const date2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
          
          const diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1) {
            newStreak = 1; // reset streak
          }
          // if diffDays === 0, streak remains same (multiple messages same day)
        }
        
        stats.totalXp += gainedXp;
        stats.weeklyXp += gainedXp;
        stats.currentLevel = currentLevel;
        stats.streakDays = newStreak;
        stats.lastActiveDate = now;
        
        stats.history.push({ xp: gainedXp, date: now, messageId: message.messageId });
        
        // Keep history manageable
        if (stats.history.length > 100) {
          stats.history.shift();
        }
      }

      await stats.save();
      logger.debug('[GamificationService] Updated stats for user', { userId: message.user, gainedXp, currentLevel });

    } catch (error) {
      logger.error('[GamificationService] Error processing message', error);
    }
  }
}

module.exports = GamificationService;
