import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { applyDecorators } from '../../utils';
import Logo from '../../components/Logo/Logo';
import MenuItem from '../../components/Menu/MenuItem';
import Menu from '../../components/Menu/Menu';
import menu from './menu';
import styles from './styles';

// import { logout } from '../../user/actions';
// import Popups from '../../Popups';


const stateToProps = state => ({});

class MainLayout extends Component {
  
  // logout = () => {
  //   const {
  //     dispatch,
  //   } = this.props;
  //   dispatch(logout());
  // }

  render() {
    const {
      children,
      classes,
    } = this.props;

    // <Popups />
    return <div className={classes.mainLayout}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Logo logoHeight={30} />
        </div>
        <Menu className={classes.menu} menu={menu}>
          { menu.map((item, key) => <MenuItem key={key} {...item} />) }
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </Menu>
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.footer}>Footer</div>
    </div>;
  }
}

export default applyDecorators(
  MainLayout,
  [connect, stateToProps],
  [injectSheet, styles]
);
