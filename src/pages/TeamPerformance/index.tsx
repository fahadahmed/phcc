import React, { useContext } from 'react';

import Header from '@components/Header/Header';
import { AppContext } from '@components/AppProvider/AppContext';
import TeamPerformanceChart from './TeamPerformanceChart';

function TeamPerformance(): JSX.Element {
  const { teamData, teams } = useContext(AppContext);
  return (
    <div style={{ padding: '10px' }}>
      <Header>
        <h1>Team Performance</h1>
      </Header>
      <div style={{ height: '600px' }}>
        <TeamPerformanceChart />
      </div>
    </div>
  );
}

export default TeamPerformance;
