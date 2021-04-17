import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

type Props = {
  title: string;
  value: number;
};

const MetricCard: FunctionComponent<Props> = ({ title, value }) => {
  const Card = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    border: 2px dashed #02c39a;
    padding: 10px;
  `;
  const Title = styled.span`
    font-family: 'Bitter', serif;
    font-size: 24px;
    color: #02c39a;
  `;
  const Value = styled.span`
    font-family: 'Bitter', serif;
    font-size: 40px;
    text-align: center;
    color: #05668d;
  `;

  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
};

MetricCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};

export default MetricCard;
