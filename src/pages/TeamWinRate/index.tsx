import React from 'react';

import Header from '../../components/Header/Header';
import Paragraph from '../../components/Paragraph/Paragraph';
import WinRateChart from './WinRateChart';

const data = [
  {
    country: 'AD',
    'hot dog': 79,
    'hot dogColor': 'hsl(279, 70%, 50%)',
    burger: 171,
    burgerColor: 'hsl(330, 70%, 50%)',
    sandwich: 114,
    sandwichColor: 'hsl(291, 70%, 50%)',
    kebab: 123,
    kebabColor: 'hsl(64, 70%, 50%)',
    fries: 45,
    friesColor: 'hsl(224, 70%, 50%)',
    donut: 21,
    donutColor: 'hsl(314, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 189,
    'hot dogColor': 'hsl(349, 70%, 50%)',
    burger: 194,
    burgerColor: 'hsl(74, 70%, 50%)',
    sandwich: 181,
    sandwichColor: 'hsl(62, 70%, 50%)',
    kebab: 41,
    kebabColor: 'hsl(87, 70%, 50%)',
    fries: 123,
    friesColor: 'hsl(166, 70%, 50%)',
    donut: 152,
    donutColor: 'hsl(158, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 50,
    'hot dogColor': 'hsl(198, 70%, 50%)',
    burger: 162,
    burgerColor: 'hsl(101, 70%, 50%)',
    sandwich: 80,
    sandwichColor: 'hsl(11, 70%, 50%)',
    kebab: 154,
    kebabColor: 'hsl(231, 70%, 50%)',
    fries: 153,
    friesColor: 'hsl(136, 70%, 50%)',
    donut: 49,
    donutColor: 'hsl(237, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 54,
    'hot dogColor': 'hsl(346, 70%, 50%)',
    burger: 172,
    burgerColor: 'hsl(158, 70%, 50%)',
    sandwich: 46,
    sandwichColor: 'hsl(203, 70%, 50%)',
    kebab: 26,
    kebabColor: 'hsl(22, 70%, 50%)',
    fries: 157,
    friesColor: 'hsl(191, 70%, 50%)',
    donut: 102,
    donutColor: 'hsl(351, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 138,
    'hot dogColor': 'hsl(339, 70%, 50%)',
    burger: 54,
    burgerColor: 'hsl(77, 70%, 50%)',
    sandwich: 114,
    sandwichColor: 'hsl(204, 70%, 50%)',
    kebab: 63,
    kebabColor: 'hsl(213, 70%, 50%)',
    fries: 51,
    friesColor: 'hsl(94, 70%, 50%)',
    donut: 58,
    donutColor: 'hsl(301, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 139,
    'hot dogColor': 'hsl(73, 70%, 50%)',
    burger: 162,
    burgerColor: 'hsl(116, 70%, 50%)',
    sandwich: 48,
    sandwichColor: 'hsl(117, 70%, 50%)',
    kebab: 173,
    kebabColor: 'hsl(102, 70%, 50%)',
    fries: 25,
    friesColor: 'hsl(48, 70%, 50%)',
    donut: 92,
    donutColor: 'hsl(332, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 133,
    'hot dogColor': 'hsl(275, 70%, 50%)',
    burger: 41,
    burgerColor: 'hsl(102, 70%, 50%)',
    sandwich: 95,
    sandwichColor: 'hsl(136, 70%, 50%)',
    kebab: 134,
    kebabColor: 'hsl(158, 70%, 50%)',
    fries: 188,
    friesColor: 'hsl(217, 70%, 50%)',
    donut: 178,
    donutColor: 'hsl(351, 70%, 50%)',
  },
];
function TeamWinRate(): JSX.Element {
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
  return (
    <div style={{ padding: '10px' }}>
      <Header>
        <h1>Team Win Rate</h1>
      </Header>
      {getCommentary()}
      <div style={{ height: '800px' }}>
        <WinRateChart data={data} />
      </div>
    </div>
  );
}

export default TeamWinRate;
