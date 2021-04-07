import { TeamData } from '../models/TeamData';

export const getTotalGames = (data: TeamData[], grade: string): number => {
  if (grade === 'All') return data.length;
  let games = data.filter((match) => match.team === grade);
  return games.length;
};

export const getTotalWins = (data: TeamData[], grade: string): number => {
  let totalWins = data.filter((item) => item.result === 'Won');
  if (grade == 'All') return totalWins.length;
  let gradeWins = totalWins.filter((item) => item.team === grade);
  return gradeWins.length;
};

export const getRunsAndWickets = (data: TeamData[], grade: string) => {
  let totalRuns = 0;
  let totalWickets = 0;
  if (grade === 'All') {
    data.forEach((match) => {
      totalRuns += match.team_score;
      totalWickets += match.team_wickets;
    });
  } else {
    data.forEach((match) => {
      if (match.team === grade) {
        totalRuns += match.team_score;
        totalWickets += match.team_wickets;
      }
    });
  }
  return [totalRuns, totalWickets];
};
