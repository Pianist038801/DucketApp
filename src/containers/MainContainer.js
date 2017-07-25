import React from 'react';
import { connect } from 'react-redux';
import { NetInfo, AppState, Alert, View } from 'react-native';
 
import I18n from 'react-native-i18n';
 
import { setMainNavigator } from '@actions/route'; 
import MainNavigator from '@navigators/MainNavigator';
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
  }
  
  componentWillUnmount() {
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
      initialRoute = 'admin';
    } else if (curRouteName === 'teams') {
      navigator = this.props.navigators.homeNavigator;
      initialRoute = 'teamList';
    } else if (curRouteName === 'settings') {
      navigator = this.props.navigators.watchNavigator;
      initialRoute = 'settings';
    } else if (curRouteName === 'rules') {
      navigator = this.props.navigators.infoNavigator;
      initialRoute = 'rules';
    }
    if(navigator != undefined)
    navigator.dispatch(Utils.getResetAction(initialRoute));
  }

  render() { 
    return (
      <View style={{ flex: 1 }}>
          <MainNavigator
            onNavigationStateChange={(prevState, currentState) => this.onNavigationStateChange(prevState, currentState)} />
      </View>
     
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setMainNavigator: (mainNavigator)=>dispatch(setMainNavigator(mainNavigator))
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  const navigators = state.get('routes');
  return { globals, navigators };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
