import React from 'react';
import styled from '@emotion/styled';

import Header from '../Header/Header';

function Sidebar(): JSX.Element {
  const NavBar = styled.div`
    display: grid;
    background: #02c39a;
  `;
  return (
    <NavBar>
      <Header>
        <h1>
          Power House Cricket
          <br />
          <small>Season 2020/21</small>
        </h1>
      </Header>
    </NavBar>
  );
}

export default Sidebar;
