import React from 'react';
import injectSheet from 'react-jss';
import Link from '../Link/Link';

const styles = {
  item: {
    display: 'inline-block',
    padding: [0, 10],
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
      background: '#ddd',
    }
  }
};

function MenuItem(props) {
  const {
    to,
    route,
    children,
    name,
    onClick,
    classes,
  } = props;

  if (to || route) {
    return <Link role="presentation" className={classes.item} to={to || Link.to(route)}>{children || name}</Link>;
  }
  if (onClick) {
    return <div role="presentation" className={classes.item} onClick={onClick}>{children || name}</div>;
  }
  return null;
}

export default injectSheet(styles)(MenuItem);
