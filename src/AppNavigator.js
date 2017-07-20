import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View, } from 'react-native';
import { connect } from 'react-redux';
  
import { Colors } from '@theme/';
import { StackNavigator } from 'react-navigation';
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
  main: { screen: MainContainer },
}, {
  initialRouteName: 'splash',
  navigationOptions: {
    header: null,
    cardStack: { gesturesEnabled: false },
  },
  headerMode: 'screen',
  lazyLoad: true,
});

export default AppNavigator;       
