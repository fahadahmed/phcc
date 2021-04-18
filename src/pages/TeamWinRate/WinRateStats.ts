import _ from 'lodash';
import { TeamData } from '../../models/TeamData';
import { getTotalGames, getTotalWins } from '../../utils/statsHelper';

type TeamObject = {
  team: string;
  winRate: number;
  winRateColor: string;
}


export const calculateStats = (data: TeamData[], selectedMetric: string, teams: string[]) => {
  let teamData: TeamObject[] = [];
  if(selectedMetric === 'overall') {
    teams.map((team) => {
      let totalGames = getTotalGames(data, team);
      let totalWins = getTotalWins(data, team);
      let winRate = parseFloat(((totalWins / totalGames) * 100).toFixed(2));
      teamData.push({
        team,
        winRate,
        winRateColor: 'hsl(197, 93%, 29%)'
      });
    });
  }
  return teamData;
}