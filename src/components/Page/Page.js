import React from 'react';
import injectSheet from 'react-jss';
import { classnames } from '../../utils';

const styles = {
  page: {
    minHeight: '100%',
  }
};

class Page extends React.Component {
  render() {
    const { classes, className, children } = this.props;
    const classNames = classnames(classes.page, className);
    return <div className={classNames}>{children}</div>;
  }
}

export default injectSheet(styles)(Page);
