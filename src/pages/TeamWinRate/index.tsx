import React from 'react';

import Header from '../../components/Header/Header';

function TeamWinRate(): JSX.Element {
  const getCommentary = () => {
    return (
      <p>
        The Team Win Rate is the winning percentage of the team over the season across all games.
        This insight shows us how each grade performed overall as well as how did they perform when
        playing home games or away. It also shows how each grade performed when batting first or
        second.
      </p>
    );
  };
  return (
    <>
      <Header>
        <h1>Team Win Rate</h1>
      </Header>
      {getCommentary()}
    </>
  );
}

export default TeamWinRate;
