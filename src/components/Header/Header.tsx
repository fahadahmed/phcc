import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

type Props = {
  children: ReactNode;
};

const Header: FunctionComponent<Props> = ({ children }) => {
  const HeaderContainer = styled.div`
    h1 {
      color: #05668d;
      font-family: 'Bitter', serif;

      small {
        font-weight: 500;
        font-style: italic;
      }
    }
  `;
  return <HeaderContainer>{children}</HeaderContainer>;
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
