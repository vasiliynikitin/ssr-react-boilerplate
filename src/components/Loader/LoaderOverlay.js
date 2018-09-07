import React from 'react';
import injectSheet from 'react-jss';
import Loader from './Loader';

const styles = {
  block: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255,255,255,.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function LoaderOverlay({ classes }) {
  return <div className={classes.block}>
    <Loader />
  </div>;
}

export default injectSheet(styles)(LoaderOverlay);
