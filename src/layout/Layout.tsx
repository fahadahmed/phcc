import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

type Props = {
  children: ReactNode;
};

export const Layout: FunctionComponent<Props> = ({ children }) => {
  const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 20px;
    height: 100vh;
    background: #f0f3bd;

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  `;
  return <AppContainer>{children}</AppContainer>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
