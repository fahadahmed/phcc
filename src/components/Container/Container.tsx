import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children }) => {
  const Content = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-gap: 10px;
  `;
  return <Content>{children}</Content>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
