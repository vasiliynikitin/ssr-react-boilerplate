import React from 'react';
import injectSheet from 'react-jss';
import { classnames } from '../../utils';

const styles = {
  menu: {
    lineHeight: '40px',
    color: '#333',
  },
};

function Menu({ children, classes, className }) {
  return <div className={classnames(classes.menu, className)}>
    { children }
  </div>;
}

export default injectSheet(styles)(Menu);