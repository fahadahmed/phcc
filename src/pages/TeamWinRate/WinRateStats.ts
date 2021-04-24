import { TeamData } from '@models/TeamData';
import { getTotalGames, getTotalWins } from '@utils/statsHelper';

type TeamObject = {
  team: string;
  winRate: number;
  winRateColor: string;
};

export const calculateHomeStats = (data: TeamData[]) => {
  const homeGames = data.filter((item) => item.home_game);
  const homeWins = homeGames.filter((item) => item.result === 'Won');
  const winRate = parseFloat(((homeWins.length / homeGames.length) * 100).toFixed(2));
  return winRate;
};

export const calculateAwayStats = (data: TeamData[]) => {
  const homeGames = data.filter((item) => !item.home_game);
  const homeWins = homeGames.filter((item) => item.result === 'Won');
  const winRate = parseFloat(((homeWins.length / homeGames.length) * 100).toFixed(2));
  return winRate;
};

export const calculateBatFirstStats = (data: TeamData[]) => {
  const games = data.filter((item) => item.toss === 'Bat first');
  const wins = games.filter((item) => item.result === 'Won');
  const winRate = parseFloat(((wins.length / games.length) * 100).toFixed(2));
  return winRate;
};

export const calculateBowlFirstStats = (data: TeamData[]) => {
  const games = data.filter((item) => item.toss === 'Bowled first');
  const wins = games.filter((item) => item.result === 'Won');
  const winRate = parseFloat(((wins.length / games.length) * 100).toFixed(2));
  return winRate;
};

export const calculateStats = (data: TeamData[], selectedMetric: string, teams: string[]) => {
  let teamData: TeamObject[] = [];
  if (selectedMetric === 'overall') {
    teams.map((team) => {
      let totalGames = getTotalGames(data, team);
      let totalWins = getTotalWins(data, team);
      let winRate = parseFloat(((totalWins / totalGames) * 100).toFixed(2));
      teamData.push({
        team,
        winRate,
        winRateColor:
          winRate < 50
            ? 'hsl(12, 76%, 61%)'
            : winRate >= 70
            ? 'hsl(167, 98%, 39%)'
            : 'hsl(197, 93%, 29%)',
      });
    });
  }

  if (selectedMetric === 'home' || selectedMetric === 'away') {
    teams.map((team) => {
      let winRate;
      let teamStats = data.filter((item) => item.team === team);
      if (selectedMetric === 'home') {
        winRate = calculateHomeStats(teamStats);
      } else {
        winRate = calculateAwayStats(teamStats);
      }
      teamData.push({
        team,
        winRate,
        winRateColor:
          winRate < 50
            ? 'hsl(12, 76%, 61%)'
            : winRate >= 70
            ? 'hsl(167, 98%, 39%)'
            : 'hsl(197, 93%, 29%)',
      });
    });
  }

  if (selectedMetric === 'bat' || selectedMetric === 'bowl') {
    teams.map((team) => {
      let winRate;
      let teamStats = data.filter((item) => item.team === team);
      if (selectedMetric === 'bat') {
        winRate = calculateBatFirstStats(teamStats);
      } else {
        winRate = calculateBowlFirstStats(teamStats);
      }
      teamData.push({
        team,
        winRate,
        winRateColor:
          winRate < 50
            ? 'hsl(12, 76%, 61%)'
            : winRate >= 70
            ? 'hsl(167, 98%, 39%)'
            : 'hsl(197, 93%, 29%)',
      });
    });
  }
  return teamData;
};
