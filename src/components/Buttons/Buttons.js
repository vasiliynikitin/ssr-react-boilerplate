import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const RIGHT = 'right';
const CENTER = 'center';

const styles = {
  buttons: {
  },
  [RIGHT]: {
    textAlign: 'right',
  },
  [CENTER]: {
    textAlign: 'center',
  },
};

class Buttons extends React.Component {
  render() {
    const {
      align,
      children,
      className,
      classes
    } = this.props;

    const classNames = [
      className,
      classes.buttons,
      classes[align],
    ].filter(Boolean).join(' ');

    return <div className={classNames}>{ children }</div>;
  }
}

Buttons.RIGHT = RIGHT;
Buttons.CENTER = CENTER;

Buttons.propTypes = {
  align: PropTypes.oneOf([RIGHT, CENTER]),
};

export default injectSheet(styles)(Buttons);
