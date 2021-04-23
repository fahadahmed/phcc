import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import Header from '../Header/Header';

function Sidebar(): JSX.Element {
  const NavBar = styled.div`
    display: grid;
    background: #02c39a;
  `;
  const Navigation = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Nav = styled(NavLink)`
    padding: 10px;
    text-decoration: none;
    font-family: 'Bitter', serif;
    font-size: 20px;
    color: #05668d;

    &:hover {
      background: #2a9d8f;
      color: #f0f3bd;
    }

    &.active {
      color: #f0f3bd;
      background: #05668d;
    }
  `;
  return (
    <NavBar>
      <div>
        <Header>
          <h1>
            Power House Cricket
            <br />
            <small>Season 2020/21</small>
          </h1>
        </Header>
        <Navigation>
          <Nav to="/win-rate">Win Rate</Nav>
          <Nav to="/team-performance">Teams Monthly Performance</Nav>
          <Nav to="/player-performance">Players Performance</Nav>
          <Nav to="/match-reports">Match Reports</Nav>
          <Nav to="/financial-report">Season Financial Report</Nav>
        </Navigation>
      </div>
    </NavBar>
  );
}

export default Sidebar;
