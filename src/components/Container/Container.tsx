import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children }) => {
  const Content = styled.div`
    padding: 10px;
    font-family: 'Arial', sans-serif;
  `;
  return <Content>{children}</Content>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
