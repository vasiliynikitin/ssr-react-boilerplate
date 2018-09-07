import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Page from '../../components/Page/Page';

const styles = {
  page: {

  }
};

class NotFoundPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Page className={classes.page}>
        404
      </Page>
    );
  }
}

export default injectSheet(styles)(NotFoundPage);
