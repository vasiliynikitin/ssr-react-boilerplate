import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Page from '../../components/Page/Page';

import styles from './styles';

class DashboardPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Page className={classes.page}>
        DASHBOARD
      </Page>
    );
  }
}

export default injectSheet(styles)(DashboardPage);
