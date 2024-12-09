import React from 'react';
import { Skull, Goal, Trophy, Clock, MapPin } from 'lucide-react';
import { Match } from '../types/match';
import { PredictionBar } from './PredictionBar';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-black text-red-500 rounded-lg p-6 shadow-lg border border-red-800 hover:shadow-red-900/20 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <MapPin className="w-4 h-4" />
            <span>{match.country}</span>
          </div>
          <h3 className="text-xl font-bold">{match.league}</h3>
        </div>
        <div className="flex items-center gap-2 text-xl font-digital">
          <Clock className="w-4 h-4" />
          <span>{match.time}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6 bg-red-950/20 p-3 rounded-md">
        <span className="text-lg font-bold">{match.homeTeam}</span>
        <span className="text-2xl text-red-600 font-bold">VS</span>
        <span className="text-lg font-bold">{match.awayTeam}</span>
      </div>

      <div className="space-y-4">
        <PredictionBar
          icon={<Goal className="w-5 h-5" />}
          title="Both Teams Score"
          predictions={[
            { label: 'Yes', value: match.predictions.bothTeamsScore.yes, color: 'green' },
            { label: 'No', value: match.predictions.bothTeamsScore.no, color: 'red' }
          ]}
        />

        <PredictionBar
          icon={<Skull className="w-5 h-5" />}
          title="Total Goals"
          predictions={[
            { label: 'Over 2.5', value: match.predictions.totalGoals.over25, color: 'green' },
            { label: 'Under 2.5', value: match.predictions.totalGoals.under25, color: 'red' }
          ]}
        />

        <PredictionBar
          icon={<Trophy className="w-5 h-5" />}
          title="Match Result"
          predictions={[
            { label: 'Home', value: match.predictions.matchResult.home, color: 'green' },
            { label: 'Draw', value: match.predictions.matchResult.draw, color: 'yellow' },
            { label: 'Away', value: match.predictions.matchResult.away, color: 'blue' }
          ]}
        />
      </div>
    </div>
  );
};