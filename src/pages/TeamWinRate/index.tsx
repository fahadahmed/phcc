import React, { useState, useEffect, useContext } from 'react';

import Header from '../../components/Header/Header';
import Paragraph from '../../components/Paragraph/Paragraph';
import WinRateChart from './WinRateChart';

import { AppContext } from '../../components/AppProvider/AppContext';
import { calculateStats } from './WinRateStats';

const metricOptions = [
  { metric: "overall", label: "Overall" },
  { metric: "home", label: "Home Games" },
  { metric: "away", label: "Away Games" },
  { metric: "bat", label: "Batting First" },
  { metric: "bowl", label: "Bowling First" },
]
function TeamWinRate(): JSX.Element {
  const [selectedMetric, setSelectedMetric] = useState("overall");
  const { teamData, teams } = useContext(AppContext);
  const [data, setData] = useState([]);

  const selectMetric = (e: string) => {
    setSelectedMetric(e);
  };

  const getCommentary = () => {
    return (
      <Paragraph>
        The Team Win Rate is the winning percentage of the team over the season across all games.
        This insight shows us how each grade performed overall as well as how did they perform when
        playing home games or away. It also shows how each grade performed when batting first or
        second.
      </Paragraph>
    );
  };

  useEffect(() => {
    const result = calculateStats(teamData, selectedMetric, teams);
    console.log(result);
    setData(result);
  },[selectedMetric, teamData]);

  return (
    <div style={{ padding: '10px' }}>
      <Header>
        <h1>Team Win Rate</h1>
      </Header>
      {!teamData && <div>Loading...</div>}
      {teamData && (
        <>
          {getCommentary()}
          <select
            value={selectedMetric}
            onBlur={(e) => selectMetric(e.target.value)}
            onChange={(e) => selectMetric(e.target.value)}
          >
            {metricOptions.map((option) => (
              <option value={option.metric} key={option.metric}>{option.label}</option>
            ))}
          </select>
          {selectedMetric}
          <div style={{ height: '400px' }}>
            <WinRateChart data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default TeamWinRate;
