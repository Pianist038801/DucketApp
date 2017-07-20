import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View, } from 'react-native';
import { connect } from 'react-redux';
  
import { Colors } from '@theme/';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Splash from '@containers/Splash';
import Login from '@containers/Authentication/Login';
import Register from '@containers/Authentication/Register';
import ForgotPassword from '@containers/Authentication/ForgotPassword';
import MainContainer from '@containers/MainContainer';
import Home from '@containers/Home';

const AppNavigator = StackNavigator({
  splash: { screen: Splash },
  login: { screen: Login },
  register: { screen: Register },
  forgotPassword: { screen: ForgotPassword },
  main: { screen: ForgotPassword },
}, {
  initialRouteName: 'splash',
  navigationOptions: {
    header: null,
    cardStack: { gesturesEnabled: false },
  },
  headerMode: 'screen',
  lazyLoad: true,
});

const AppWithNavigationState = function({ dispatch, nav }) {
  return (
    <AppNavigator 
        navigation = {addNavigationHelpers({ dispatch, state: nav })}
    />
  );
}

AppWithNavigationState.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  nav: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);