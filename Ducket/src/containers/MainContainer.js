import React from 'react';
import { connect } from 'react-redux';
import { NetInfo, AppState, Alert, View } from 'react-native';
 
import I18n from 'react-native-i18n';
 
import { setMainNavigator } from '@actions/route';
import PushController from '@components/PushController';

import { MainNavigator } from '@navigators/MainNavigator';
import Api from '@api';
import Utils from '@src/utils';

let mthis;

class MainContainer extends React.Component {   
  constructor(props) {
    super(props);
    mthis = this;
    // this.state = { appState: AppState.currentState };
  }

  componentWillMount() {
    this.props.setMainNavigator(this.props.navigation);
  }

  componentDidMount() {
   /*8 AppState.addEventListener('change', this.handleAppStateChange.bind(this));
    NetInfo.isConnected.fetch().then((isConnected) => {
      // console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      mthis.props.setNetworkState(isConnected);
    });
    NetInfo.isConnected.addEventListener(
      'change',
      mthis.handleFirstConnectivityChange,
    );
    const me = this.props.globals.me;
    if (!(me.location && me.occupation && me.bio) && me.isFullProfile !== true) { // && !isFillProfileAlertShown) {
      // isFillProfileAlertShown = true;
      setTimeout(() => {
        Alert.alert('', I18n.t('FILL_PROFILE'));
      }, 50);
    }*/
  }
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this));
  }

  handleFirstConnectivityChange(isConnected) {
    // console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
    mthis.props.setNetworkState(isConnected);
  }

  async handleAppStateChange(nextAppState) {
    /*if (nextAppState === 'active') {
      console.log('App has come to the foreground!');
      if (Api.setting.token !== null && Api.setting.token !== undefined && Api.setting.token !== '') {
        console.log('reload data');
        await Api.loadInitialData(this.props, 1, false);
      }
    } else {
      const nPayload = { userId: this.props.globals.me._id };
      console.log('clear push notif icon badge count');
      fetch(Api.CLEAR_PUSH_BADGE_COUNT_URL, Api.getParams('post', nPayload));
      FCM.setBadgeNumber(0);
    }
    // this.setState({ appState: nextAppState });
    this.props.setAppState(nextAppState);*/
  }
  
  onNavigationStateChange(prevState, currentState) {
    const getCurrentRouteName = (navigationState) => {
      if (!navigationState) return null;
      const route = navigationState.routes[navigationState.index];
      if (route.routes) return getCurrentRouteName(route);
      return route.routeName;
    };

    const curRouteName = getCurrentRouteName(currentState);
    let navigator;
    let initialRoute;
    if (curRouteName === 'games') {
      navigator = this.props.navigators.adminNavigator;
      initialRoute = 'gameList';
    } else if (curRouteName === 'admin') {
      navigator = this.props.navigators.writeNavigator;
      initialRoute = 'Write';
    } else if (curRouteName === 'teams') {
      navigator = this.props.navigators.homeNavigator;
      initialRoute = 'teamList';
    } else if (curRouteName === 'settings') {
      navigator = this.props.navigators.watchNavigator;
      initialRoute = 'Watch';
    } else if (curRouteName === 'rules') {
      navigator = this.props.navigators.infoNavigator;
      initialRoute = 'Info';
    }
    navigator.dispatch(Utils.getResetAction(initialRoute));
  }

  render() { 
    return (
      <View/>
     
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  const navigators = state.get('routes');
  return { globals, navigators };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
