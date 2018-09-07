import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

// eslint-disable-next-line
const balls = Array.apply(null, {length: 6}).map(Number.call, Number);

function Loader({ classes }) {
  return <div className={classes.block}>
    <div className={classes.loader}>
      { balls.map(n => <div className={`${classes.ball} ${classes[`ball${n}`]}`} key={n} />) }
    </div>
    <div className="text">Loading</div>
  </div>;
}

export default injectSheet(styles)(Loader);
