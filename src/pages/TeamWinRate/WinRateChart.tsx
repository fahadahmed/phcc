import React, { FC } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const getBarColor = (bar: any) => bar.data.winRateColor;

type Props = {
  data: Array<any>;
};

const WinRateChart: FC<Props> = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['winRate']}
    indexBy="team"
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={getBarColor}
    borderColor="#00a896"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Team',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickValues: [0, 25, 50, 75, 100],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Win Rate %',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

WinRateChart.propTypes = {
  data: PropTypes.array,
};

export default WinRateChart;
