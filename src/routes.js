import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router';

import MainLayout from './layouts/MainLayout/MainLayout';

import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function EmptyLayout({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}

function LayoutRoute({component: Component, layout: Layout, ...restProps }) {
  return <Route {...restProps} render={matchProps => <Layout><Component {...matchProps} /></Layout>} />;
}

export const links = {
  dashboard: () => '/dashboard',
  other: () => '/anotherurl',
};

const config = [
  {
    exact: true,
    path: links.dashboard(),
    component: DashboardPage,
  },
];


function UserRedir() {
  return <Redirect push to={config[0].path} />;
}

function Routes({ isGuest, ...props }) {
  return <Switch>
    <LayoutRoute exact path="/" component={isGuest ? LoginPage : UserRedir} layout={EmptyLayout} />
    { isGuest && <Redirect push to="/" /> }
    { config.map((item) => <LayoutRoute key={item.path} layout={MainLayout} {...item} />) }
    <LayoutRoute component={NotFoundPage} layout={EmptyLayout} />
  </Switch>;
}

Routes.propTypes = {
  isGuest: PropTypes.bool.isRequired,
};

export default withRouter(Routes);
