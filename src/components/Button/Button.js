import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { colors } from '../../variables';

const styles = {
  button: {
    background: colors.primary,
    color: '#fff',
    lineHeight: '34px',
    display: 'inline-block',
    padding: '0 17px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    textAlign: 'center',
    borderRadius: 3,
  },
  block: {
    width: '100%',
  }
};

class Button extends React.Component {
  render() {
    const {
      children,
      className,
      onClick,
      isBlock,
      classes
    } = this.props;
    const classNames = [
      classes.button,
      className,
      isBlock ? classes.block : '',
    ].filter(Boolean).join(' ');

    return <div
      role="presentation"
      className={classNames}
      onClick={onClick}
    >
      {children}
    </div>;
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  isBlock: PropTypes.bool,
};

export default injectSheet(styles)(Button);
