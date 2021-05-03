import moment from 'moment';
import _ from 'lodash';

import { TeamData } from '../models/TeamData';
import { string } from 'prop-types';

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

export const getWinsStats = (data: TeamData[], grade: string) => {
  let totalWins,
    homeGames,
    awayGames,
    homeWins,
    awayWins,
    batFirstGames,
    bowlFirstGames,
    batFirstWins,
    bowlFirstWins;

  if (grade === 'All') {
    totalWins = data.filter((item) => item.result === 'Won');
    homeGames = data.filter((item) => item.home_game);
    awayGames = data.filter((item) => !item.home_game);
    batFirstGames = data.filter((item) => item.toss === 'Bat first');
    bowlFirstGames = data.filter((item) => item.toss === 'Bowled first');
  } else {
    totalWins = data.filter((item) => item.result === 'Won' && item.team === grade);
    homeGames = data.filter((item) => item.home_game && item.team === grade);
    awayGames = data.filter((item) => !item.home_game && item.team === grade);
    batFirstGames = data.filter((item) => item.toss === 'Bat first' && item.team === grade);
    bowlFirstGames = data.filter((item) => item.toss === 'Bowled first' && item.team === grade);
  }
  homeWins = homeGames.filter((item) => item.result === 'Won');
  awayWins = awayGames.filter((item) => item.result === 'Won');
  batFirstWins = batFirstGames.filter((item) => item.result === 'Won');
  bowlFirstWins = bowlFirstGames.filter((item) => item.result === 'Won');

  return {
    totalWins: totalWins.length,
    homeGames: homeGames.length,
    awayGames: awayGames.length,
    homeWins: homeWins.length,
    awayWins: awayWins.length,
    batFirstGames: batFirstGames.length,
    bowlFirstGames: bowlFirstGames.length,
    batFirstWins: batFirstWins.length,
    bowlFirstWins: bowlFirstWins.length,
  };
};

const getMonthName = (data: number) => {
  switch (data) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 10:
      return 'November';
    case 11:
      return 'December';
  }
};

export const getUniqueMonths = (data: TeamData[]): string[] => {
  let dates: string[] = [];
  data.forEach((match) => dates.push(match.date_played));
  let parsedDates: any[] = [];
  dates.forEach((matchDate) => {
    parsedDates.push(moment(matchDate).month());
  });
  let uniqMonthNumbers = _.uniq(parsedDates);
  let months: string[] = [];
  uniqMonthNumbers.forEach((month) => months.push(getMonthName(month)));
  return months;
};

export const getTeams = (data: TeamData[]) => {
  let teams: string[] = [];
  data.forEach((match: TeamData) => teams.push(match.team));
  let uniqTeamNames = _.uniq(teams);
  return uniqTeamNames;
};

export const calculatePerformanceStats = (data: TeamData[], teams: string[], months: string[]) => {
  //let statsByMonth = [];
  // get the games played for each grade on a monthly basis
  teams.map((team) => {
    let gradeMatches = data.filter((match) => match.team === team);
    getMonthlyBreakdown(gradeMatches, months, team);
  });
  // push those stats in an array
};

interface monthStats {
  team: string;
  month: string;
  winRate: number;
  averageRunsScored: number;
}

const getMonthlyBreakdown = (matches: TeamData[], months: string[], team: string) => {
  let stats: monthStats[] = [];
  months.map((month) => {
    let monthMatchPlayed = 0;
    let matchesWon = 0;
    let runsScored = 0;
    matches.map((match) => {
      const matchMonth = getMonthName(moment(match.date_played).month());
      if (month === matchMonth) {
        monthMatchPlayed += 1;
        runsScored += match.team_score;
        if (match.result === 'Won') {
          matchesWon += 1;
        }
      }
    });
    const winRate = parseFloat(((matchesWon / monthMatchPlayed) * 100).toFixed(1));
    const averageRunsScored = parseFloat((runsScored / monthMatchPlayed).toFixed(0));
    stats.push({
      team,
      month,
      winRate,
      averageRunsScored,
    });
  });
  console.log(stats);
};
