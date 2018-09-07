import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { parseInputChange, applyDecorators } from '../../utils';
import Button from '../../components/Button/Button';
import Buttons from '../../components/Buttons/Buttons';
import Page from '../../components/Page/Page';
import Logo from '../../components/Logo/Logo';
import InputField from '../../components/InputField/InputField';

import styles from './styles';
import { doLogin } from './actions';
import LoaderOverlay from '../../components/Loader/LoaderOverlay';

// TODO better error handling

class LoginPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      username: 'username',
      password: 'password',
      loading: false,
      error: false,
    };
  }

  showSignup = () => {
    // TODO
  }

  login = () => {
    const {
      dispatch,
    } = this.props;
    const {
      username,
      password,
    } = this.state;
    this.setState({ loading: true });
    dispatch(doLogin({ username, password }))
      .catch((e) => {
        this.setState({ error: e.error, loading: false });
      });
  }

  handleInputChange = (event) => {
    this.setState({
      ...parseInputChange(event),
      error: false,
    });
  }

  renderLoginForm() {
    const { classes } = this.props;
    const { username, password, error, loading } = this.state;

    return <div className={classes.loginForm}>
      <div className={classes.wrap}>
        {loading && <LoaderOverlay /> }
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.form}>
          <InputField
            error={error}
            caption="Username"
            name="username"
            type="text"
            onChange={this.handleInputChange}
            value={username}
          />
          <InputField
            error={error}
            caption="Password"
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={password}
          />
          <Buttons className={classes.buttons}>
            <Button className={classes.button} onClick={this.login}>Log In</Button>
          </Buttons>
        </div>
        <div className={classes.bottom}>
          Don&#8217;t have an account?&nbsp;
          <span role="presentation" className="link" onClick={this.showSignup}>
          <a href="#">Sign Up</a> for free</span>
        </div>
      </div>
    </div>;
  }

  renderInfo() {
    const { classes } = this.props;
    return <div className={classes.wrap}>asd</div>;
  }

  render() {
    const { classes } = this.props;

    return (
      <Page className={classes.page}>
        <div className={classes.top}>
          { this.renderLoginForm() }
        </div>
        <div className={classes.copy}>©2018</div>
      </Page>
    );
  }
}

export default applyDecorators(
  LoginPage,
  [injectSheet, styles],
  [connect],
);
