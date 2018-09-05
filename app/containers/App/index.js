/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import PlanPage from 'containers/PlanPage/Loadable';
import RunPage from 'containers/RunPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// Remove header + footer for now
// import Header from 'components/Header';
// import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Agenda"
        defaultTitle="Agenda"
      >
        <meta name="description" content="Agenda" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
      </Helmet>
      <Switch>
        <Route path="/run/:key" component={RunPage} />
        <Route path="/plan/:key" component={PlanPage} />
        <Route path="" component={LandingPage} />
      </Switch>
    </AppWrapper>
  );
}
