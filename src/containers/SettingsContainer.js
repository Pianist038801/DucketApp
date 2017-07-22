import React from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

import { Icon, Metrics } from '@theme/';
import SettingsNavigator from '@navigators/SettingsNavigator';
 
class SettingsContainer extends React.Component {
  static navigationOptions = {
    title: I18n.t('SETTINGS'),
    
  }
  render() {
    return (
      <SettingsNavigator />
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
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
