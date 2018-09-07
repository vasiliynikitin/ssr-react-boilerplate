import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router';
import Routes from '../../routes';
import Loader from '../Loader/Loader';
import { applyDecorators } from '../../utils';
import styles from './styles';
import { isGuest } from '../../user/user';

function App({ user }) {
  if (!user.data) {
    return <Loader />;
  }
  return <Routes isGuest={isGuest(user)} />;
}

App.propTypes = {
  user: PropTypes.object.isRequired,
};

const stateToProps = state => ({ user: state.user });

export default withRouter(
  applyDecorators(
    App,
    [injectSheet, styles],
    [connect, stateToProps],
  )
);
