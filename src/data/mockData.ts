import { Match } from '../types/match';

export const matches: Match[] = [
  {
    id: '1',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
    league: 'Premier League',
    time: '20:45',
    predictions: {
      bothTeamsScore: {
        yes: 75,
        no: 25
      },
      totalGoals: {
        over25: 68,
        under25: 32
      },
      matchResult: {
        home: 45,
        draw: 28,
        away: 27
      }
    }
  },
  {
    id: '2',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    country: '🇫🇷 France',
    league: 'Ligue 1',
    time: '21:00',
    predictions: {
      bothTeamsScore: {
        yes: 82,
        no: 18
      },
      totalGoals: {
        over25: 73,
        under25: 27
      },
      matchResult: {
        home: 58,
        draw: 24,
        away: 18
      }
    }
  }
];