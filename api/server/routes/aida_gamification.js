const express = require('express');
const Gamification = require('~/models/Gamification');
const { requireJwtAuth } = require('~/server/middleware/');

const router = express.Router();
router.use(requireJwtAuth);

router.get('/stats', async (req, res) => {
  try {
    const userId = req.user.id;
    let stats = await Gamification.findOne({ user: userId });
    
    if (!stats) {
      stats = {
        totalXp: 0,
        currentLevel: 'Degrau 1',
        streakDays: 0,
        weeklyXp: 0,
        history: []
      };
    }
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gamification stats' });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const topUsers = await Gamification.find()
      .sort({ weeklyXp: -1 })
      .limit(10)
      .populate('user', 'name username') // assuming user has name/username
      .lean();
      
    // Anonymize or map data for safe frontend consumption
    const leaderboard = topUsers.map((stat, index) => ({
      rank: index + 1,
      name: stat.user?.name || stat.user?.username || 'Aluno Anônimo',
      level: stat.currentLevel,
      xp: stat.weeklyXp
    }));
    
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
});

module.exports = router;
