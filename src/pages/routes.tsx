import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Container from '../components/Container/Container';
import { MetricContainer } from '../components/MetricContainer/MetricContainer';

import TeamWinRate from './TeamWinRate';

function Routes(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Container>
          <MetricContainer>
            <div>Total Teams 4</div>
            <div>Teams in Finals 3</div>
            <div>Teams in Grand Finals 2</div>
            <div>Premierships 1</div>
          </MetricContainer>
          <Switch>
            <Route path="/" component={TeamWinRate} />
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
}

export default Routes;
