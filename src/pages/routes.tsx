import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Container from '../components/Container/Container';
import { MetricContainer } from '../components/MetricContainer/MetricContainer';
import MetricCard from '../components/MetricCard';

import { AppProvider } from '../components/AppProvider/AppContext';

import TeamWinRate from './TeamWinRate';

function Routes(): JSX.Element {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Sidebar />
          <Container>
            <MetricContainer>
              <MetricCard title="Total Teams" value={4} />
              <MetricCard title="Teams in Finals" value={3} />
              <MetricCard title="Teams in Grand Finals" value={2} />
              <MetricCard title="Premierships" value={1} />
            </MetricContainer>
            <Switch>
              <Route path="/" component={TeamWinRate} />
            </Switch>
          </Container>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default Routes;
