import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const pick = (obj, keys) => keys.reduce((acc, key) => (acc[key] = obj[key], acc), {}); // eslint-disable-line

//TODO: maxLen

class InputField extends React.Component {
  getInputProps() {
    return pick(this.props, ['onChange', 'value', 'disabled', 'name']);
  }

  getTextareaProps() {
    return pick(this.props, ['onChange', 'disabled', 'name']);
  }

  renderInput() {
    const { type, children } = this.props;
    let block;
    switch (type) {
      case 'textarea':
        return <textarea {...this.getInputProps()}/>;
      case 'password':
      case 'text':
        return <input {...this.getInputProps()} type={type} />;
      default:
        block = children;
    }
    return block;
  }

  render() {
    const { inline, caption, type, disabled, error, classes } = this.props;
    const classNames = [
      classes.block,
      inline ? classes.inline : '',
      disabled ? classes.disabled : '',
      type ? classes[type] : '',
      error ? classes.error : '',
    ].filter(Boolean).join(' ');

    return <div className={classNames}>
      <div className={classes.caption}>{caption}</div>
      <div className={classes.wrap}>
        { this.renderInput() }
      </div>
    </div>;
  }
}

InputField.propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  caption: PropTypes.string.isRequired,
};

export default injectSheet(styles)(InputField);