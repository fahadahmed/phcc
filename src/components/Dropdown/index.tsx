import styled from '@emotion/styled';

const Dropdown = styled.select`
  font-family: 'Bitter', serif;
  font-size: 20px;
  color: #02c39a;
  background: none;
  min-width: 200px;
  padding: 10px;
  border: 2px solid #02c39a;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export default Dropdown;
