import React, { useState, useEffect } from 'react';

import teamData from '../data/team-overall.json';
import { TeamData } from '../models/TeamData';
import { getTotalGames, getTotalWins, getRunsAndWickets } from '../utils/statsHelper';
import { initialTeamData, teams } from '../utils/constants';

function App(): JSX.Element {
  const [teamStats, setTeamStats] = useState(initialTeamData);
  const [selectedTeam, setSelectedTeam] = useState('All');

  const calculateStats = (data: TeamData[], selectedTeam: string) => {
    let totalGames = getTotalGames(data, selectedTeam);
    let wins = getTotalWins(data, selectedTeam);
    let [totalRuns, totalWickets] = getRunsAndWickets(data, selectedTeam);

    setTeamStats({
      totalPlayed: totalGames,
      totalWins: wins,
      totalRunsScored: totalRuns,
      totalWicketsTaken: totalWickets,
    });
  };

  const selectGrade = (e: string) => {
    setSelectedTeam(e);
  };

  useEffect(() => {
    calculateStats(teamData, selectedTeam);
  }, [selectedTeam]);
  return (
    <div>
      <h1>Power House Season Stats 2020-21</h1>
      <select
        onBlur={(e) => selectGrade(e.target.value)}
        onChange={(e) => selectGrade(e.target.value)}
      >
        {teams.map((team) => (
          <option value={team} key={team}>
            {team}
          </option>
        ))}
      </select>
      <p>Team: {selectedTeam}</p>
      <p>Total Matches Played: {teamStats.totalPlayed}</p>
      <p>Total Wins: {teamStats.totalWins}</p>
      <p>Win Rate: {((teamStats.totalWins / teamStats.totalPlayed) * 100).toFixed(2)}</p>
      <p>Total Runs Scored: {teamStats.totalRunsScored}</p>
      <p>Total Wickets Taken: {teamStats.totalWicketsTaken}</p>
    </div>
  );
}

export default App;
