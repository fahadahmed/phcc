import React, { useState, useEffect } from 'react';

import { getTotalGames, getTotalWins, getRunsAndWickets, getWinsStats } from '../utils/statsHelper';
import { initialTeamData, initialClubData, teams } from '../utils/constants';
import PHCCApiClient from '../utils/ApiClient';

function App(): JSX.Element {
  const [teamStats, setTeamStats] = useState(initialTeamData);
  const [clubStats, setClubStats] = useState(initialClubData);
  const [selectedTeam, setSelectedTeam] = useState('All');

  const calculateStats = (selectedTeam: string) => {
    let teamData = PHCCApiClient.fetchTeamOverallDetails();
    let clubData = PHCCApiClient.fetchClubOverallDetails();
    let totalGames = getTotalGames(teamData, selectedTeam);
    let wins = getTotalWins(teamData, selectedTeam);
    let [totalRuns, totalWickets] = getRunsAndWickets(teamData, selectedTeam);

    let { totalWins, homeGames, awayGames, homeWins, awayWins } = getWinsStats(teamData, selectedTeam);
    console.log(totalWins, homeGames, awayGames, homeWins, awayWins);

    setTeamStats({
      totalPlayed: totalGames,
      totalWins,
      homeGames,
      awayGames,
      homeWins,
      awayWins,
      totalRunsScored: totalRuns,
      totalWicketsTaken: totalWickets,
    });

    setClubStats(clubData);
  };

  const selectGrade = (e: string) => {
    setSelectedTeam(e);
  };

  useEffect(() => {
    calculateStats(selectedTeam);
  }, [selectedTeam]);
  return (
    <div>
      <h1>Power House Season Stats 2020-21</h1>
      <p>Total Teams Participated: {clubStats.totalTeams}</p>
      <p>Teams Qualified for Finals: {clubStats.teamsInFinals}</p>
      <p>Teams Qualified for Grand Finals: {clubStats.teamsInGF}</p>
      <p>Premierships: {clubStats.premierships}</p>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {clubStats.standings.map((grade, i) => (
            <tr key={i}>
              <td><strong>{grade.team}</strong> <small>{grade.alias}</small></td>
              <td>{grade.standing}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <p>Home Wins: {teamStats.homeWins} out of {teamStats.homeGames}</p>
      <p>Away Wins: {teamStats.awayWins} out of {teamStats.awayGames}</p>
      <p><strong>Win Rate</strong></p>
      <p>
        Overall: {((teamStats.totalWins / teamStats.totalPlayed) * 100).toFixed(2)}
        <br/>
        Home: {((teamStats.homeWins / teamStats.homeGames) * 100).toFixed(2)}
        <br/>
        Away: {((teamStats.awayWins / teamStats.awayGames) * 100).toFixed(2)}
      </p>
      <p>Total Runs Scored: {teamStats.totalRunsScored}</p>
      <p>Total Wickets Taken: {teamStats.totalWicketsTaken}</p>
    </div>
  );
}

export default App;
