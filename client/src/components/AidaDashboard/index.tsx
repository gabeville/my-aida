import React, { useEffect, useState } from 'react';
import { useGetStartupConfig } from 'librechat-data-provider/react-query';
import { useAuthContext } from '~/hooks/AuthContext';

export default function AidaDashboard() {
  const { user } = useAuthContext();
  const [stats, setStats] = useState({ currentLevel: 'Carregando...', totalXp: 0, streakDays: 0, history: [] });
  const [leaderboard, setLeaderboard] = useState([]);
  
  useEffect(() => {
    // Fetch stats
    fetch('/api/gamification/stats', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } // LibreChat auth might use cookies or token
    })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);

    // Fetch leaderboard
    fetch('/api/gamification/leaderboard', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          AIDA | Meu Progresso
        </h1>

        {/* Player Card */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 border-l-4 border-blue-500">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Nível Atual</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{stats.currentLevel}</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 border-l-4 border-purple-500">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">XP Total</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">⚡ {stats.totalXp}</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 border-l-4 border-orange-500">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Ofensiva (Streak)</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">🔥 {stats.streakDays} dias</p>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">🏆 Liga Semanal</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Pos</th>
                  <th className="px-4 py-3">Aluno</th>
                  <th className="px-4 py-3">Nível</th>
                  <th className="px-4 py-3 text-right">XP Semanal</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item) => (
                  <tr key={item.rank} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">#{item.rank}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.level}</td>
                    <td className="px-4 py-3 text-right font-bold text-purple-500">{item.xp} XP</td>
                  </tr>
                ))}
                {leaderboard.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4">Nenhum dado encontrado ainda.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        {/* Linguistic Acquisition */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">🧠 Memória de Aquisição</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">Vocabulário Recente</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between items-center"><span className="text-blue-500 font-medium">Serendipity</span><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Acquired</span></li>
                <li className="flex justify-between items-center"><span className="text-blue-500 font-medium">Ephemeral</span><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Learning</span></li>
                <li className="flex justify-between items-center"><span className="text-blue-500 font-medium">Ubiquitous</span><span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">New</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">Estruturas Gramaticais</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between items-center"><span className="text-purple-500 font-medium">Present Perfect</span><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Acquired</span></li>
                <li className="flex justify-between items-center"><span className="text-purple-500 font-medium">Third Conditional</span><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Learning</span></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">*(Dados simulados até que o endpoint de histórico seja integrado)*</p>
        </div>

      </div>
    </div>
  );
}
