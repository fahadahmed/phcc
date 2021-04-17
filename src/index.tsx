import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';

import Routes from './pages/routes';

ReactDOM.render(
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;1,500&display=swap');
        body {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <Routes />
  </>,
  document.querySelector('#root'),
);
