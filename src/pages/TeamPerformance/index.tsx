import React, { useContext } from 'react';

import Header from '@components/Header/Header';
import { AppContext } from '@components/AppProvider/AppContext';

function TeamPerformance(): JSX.Element {
  const { teamData, teams } = useContext(AppContext);
  console.log(teamData, teams);
  return (
    <div style={{ padding: '10px' }}>
      <Header>
        <h1>Team Performance</h1>
      </Header>
    </div>
  );
}

export default TeamPerformance;
