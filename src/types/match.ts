export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  country: string;
  time: string;
  predictions: {
    bothTeamsScore: {
      yes: number;
      no: number;
    };
    totalGoals: {
      over25: number;
      under25: number;
    };
    matchResult: {
      home: number;
      draw: number;
      away: number;
    };
  };
}