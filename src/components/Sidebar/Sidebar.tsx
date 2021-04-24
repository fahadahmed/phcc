import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import Header from '../Header/Header';
import MenuIcon from '../../images/menu.svg';

function Sidebar(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const NavBar = styled.div`
    display: grid;
    background: #02c39a;
  `;
  const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 420px) {
      display: ${showMenu ? 'flex' : 'none'};
      flex-direction: column;
    }
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
  const MenuButton = styled.div`
    display: none;
    @media (max-width: 420px) {
      display: block;
      align-content: center;
    }
  `;
  const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  `;

  return (
    <NavBar>
      <div>
        <HeaderContainer>
          <Header>
            <h1>
              Power House Cricket
              <br />
              <small>Season 2020/21</small>
            </h1>
          </Header>
          <MenuButton onClick={() => setShowMenu(!showMenu)}>
            <img src={MenuIcon} alt="" height="40" width="30" />
          </MenuButton>
        </HeaderContainer>
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
