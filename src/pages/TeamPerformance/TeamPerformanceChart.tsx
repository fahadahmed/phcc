import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const data = [
  {
    country: 'B Grade',
    November: 100,
    December: 66.7,
    January: 75,
    February: 25,
    March: 33.3,
  },
  {
    country: 'C Grade',
    November: 100,
    December: 66.7,
    January: 75,
    February: 50,
    March: 25,
  },
  {
    country: 'C Sunday',
    November: 0,
    December: 66.7,
    January: 50,
    February: 50,
    March: 0,
  },
  {
    country: 'C North',
    November: 33.3,
    December: 100,
    January: 75,
    February: 50,
    March: 75,
  },
];

const TeamPerformanceChart = () => {
  return (
    <>
      <ResponsiveHeatMap
        data={data}
        keys={['November', 'December', 'January', 'February', 'March']}
        indexBy="country"
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        forceSquare={true}
        axisTop={{
          orient: 'top',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: '',
          legendOffset: 36,
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
        /* defs={[
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(0, 0, 0, 0.1)',
            rotation: -45,
            lineWidth: 4,
            spacing: 7,
          },
        ]} */
        // fill={[{ id: 'lines' }]}
        animate={true}
        // motionConfig="wobbly"
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />
    </>
  );
};

export default TeamPerformanceChart;
