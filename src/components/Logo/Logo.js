import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import LogoIcon from '../../icons/LogoIcon';

// const ALPHA = 'ἄλφα';
// const BETA = 'βήτα';
const VERSION = '';

const styles = {
  logo: {
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
  },
  logoText: {
    fontWeight: 300,
    paddingLeft: 5,
  },
  version: {
    fontSize: 11,
    fontWeight: 'normal',
    display: 'inline-block',
    position: 'relative',
    top: -8,
    marginLeft: 5,
    width: 0,
  },
  logoHeight: props => ({
    fontSize: props.logoHeight,
  }),
};

function Logo({ logoHeight, className, classes }) {
  const classNames = [classes.logo, className].filter(Boolean).join(' ');
  return <div className={classNames}>
    { !logoHeight && <LogoIcon /> }
    { logoHeight && <div className={classes.logoHeight}><LogoIcon /></div> }
    <span className={classes.logoText}>Project</span>
    <span>ONE</span>
    { VERSION && <span className={classes.version}>{VERSION}</span> }
  </div>;
}

Logo.propTypes = {
  logoHeight: PropTypes.number,
};

export default injectSheet(styles)(Logo);
