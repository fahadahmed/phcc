import React, { useContext, useState, useEffect } from 'react';

import Header from '@components/Header/Header';
import { AppContext } from '@components/AppProvider/AppContext';
import Dropdown from '@components/Dropdown';
import TeamPerformanceChart from './TeamPerformanceChart';
import { calculatePerformanceStats } from '@utils/statsHelper';

function TeamPerformance(): JSX.Element {
  const { teamData, teams, months } = useContext(AppContext);
  const [stats, setStats] = useState([]);
  const [selectedInsight, setSelectedInsight] = useState('winRate');

  const selectMetric = (e: string) => {
    setSelectedInsight(e);
  };

  useEffect(() => {
    const monthlyStats = calculatePerformanceStats(teamData, teams, months);
    setStats(monthlyStats);
  }, [months, teamData, teams]);
  console.log(stats, selectedInsight);

  return (
    <div style={{ padding: '10px' }}>
      <Header>
        <h1>Team Performance</h1>
        <Dropdown
          value={selectedInsight}
          onBlur={(e) => selectMetric(e.target.value)}
          onChange={(e) => selectMetric(e.target.value)}
        >
          <option value="winRate">Win Rate</option>
          <option value="averageRunsScored">Average Runs Scored</option>
          <option value="averageWktsTaken">Average Wickets Taken</option>
          <option value="averageRunsScoredAgainst">Average Runs Scored Against</option>
          <option value="averageWktsTakenAgainst">Average Wickets Taken Against</option>
        </Dropdown>
      </Header>
      <div style={{ height: '600px' }}>
        <TeamPerformanceChart />
      </div>
    </div>
  );
}

export default TeamPerformance;
