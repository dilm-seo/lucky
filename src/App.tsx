import React from 'react';
import { Knife } from 'lucide-react';
import { matches } from './data/mockData';
import { MatchCard } from './components/MatchCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <header className="bg-black/90 text-red-500 p-6 shadow-lg border-b border-red-800">
        <div className="container mx-auto flex items-center gap-3">
          <Knife className="w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-bold tracking-wider">Killer Predictions</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </main>

      <footer className="bg-black/90 text-red-500/60 py-6 mt-12 border-t border-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">⚠️ Predictions are for entertainment purposes only. Bet responsibly.</p>
          <p className="text-xs mt-2 text-red-500/40">© {new Date().getFullYear()} Killer Predictions</p>
        </div>
      </footer>
    </div>
  );
}

export default App;