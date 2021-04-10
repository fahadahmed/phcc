import React, { useState, useEffect } from 'react';

import { 
  getTotalGames,
  getRunsAndWickets,
  getWinsStats,
  getUniqueMonths
} from '../utils/statsHelper';
import { initialTeamData, initialClubData, teams } from '../utils/constants';
import PHCCApiClient from '../utils/ApiClient';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';

function App(): JSX.Element {
  const [teamStats, setTeamStats] = useState(initialTeamData);
  const [clubStats, setClubStats] = useState(initialClubData);
  const [selectedTeam, setSelectedTeam] = useState('All');
  const [months, setMonths] = useState([]);

  const calculateStats = (selectedTeam: string) => {
    let teamData = PHCCApiClient.fetchTeamOverallDetails();
    let clubData = PHCCApiClient.fetchClubOverallDetails();
    let totalGames = getTotalGames(teamData, selectedTeam);
    let [totalRuns, totalWickets] = getRunsAndWickets(teamData, selectedTeam);

    let {
      totalWins,
      homeGames,
      awayGames,
      homeWins,
      awayWins,
      batFirstGames,
      bowlFirstGames,
      batFirstWins,
      bowlFirstWins,
    } = getWinsStats(teamData, selectedTeam);

    setTeamStats({
      totalPlayed: totalGames,
      totalWins,
      homeGames,
      awayGames,
      homeWins,
      awayWins,
      batFirstGames,
      bowlFirstGames,
      batFirstWins,
      bowlFirstWins,
      totalRunsScored: totalRuns,
      totalWicketsTaken: totalWickets,
    });

    setClubStats(clubData);
    let uniqueMonths = getUniqueMonths(teamData);
    let months = ['All', ...uniqueMonths];
    setMonths(months);
  };

  const selectGrade = (e: string) => {
    setSelectedTeam(e);
  };

  useEffect(() => {
    calculateStats(selectedTeam);
  }, [selectedTeam]);
  return (
    <Container>
      <Header>
        <h1>
          Power House Cricket
          <br />
          <small>Season 2020-21</small>
        </h1>
      </Header>
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
              <td>
                <strong>{grade.team}</strong> <small>{grade.alias}</small>
              </td>
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
      <select>
        {months.map((month) => (
          <option value={month} key={month}>
            {month}
          </option>
        ))}
      </select>
      <p>Team: {selectedTeam}</p>
      <p>Total Matches Played: {teamStats.totalPlayed}</p>
      <p>Total Wins: {teamStats.totalWins}</p>
      <p>
        Home Wins: {teamStats.homeWins} out of {teamStats.homeGames}
      </p>
      <p>
        Away Wins: {teamStats.awayWins} out of {teamStats.awayGames}
      </p>
      <p>
        Wins Batting First: {teamStats.batFirstWins} out of {teamStats.batFirstGames}
      </p>
      <p>
        Wins Bowling First: {teamStats.bowlFirstWins} out of {teamStats.bowlFirstGames}
      </p>
      <p>
        <strong>Win Rate</strong>
      </p>
      <p>
        Overall: {((teamStats.totalWins / teamStats.totalPlayed) * 100).toFixed(2)}
        <br />
        Home: {((teamStats.homeWins / teamStats.homeGames) * 100).toFixed(2)}
        <br />
        Away: {((teamStats.awayWins / teamStats.awayGames) * 100).toFixed(2)}
        <br />
        Batting First: {((teamStats.batFirstWins / teamStats.batFirstGames) * 100).toFixed(2)}
        <br />
        Bowling First: {((teamStats.bowlFirstWins / teamStats.bowlFirstGames) * 100).toFixed(2)}
      </p>
      <p>Total Runs Scored: {teamStats.totalRunsScored}</p>
      <p>Total Wickets Taken: {teamStats.totalWicketsTaken}</p>
    </Container>
  );
}

export default App;
