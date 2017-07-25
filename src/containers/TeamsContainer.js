import React from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

import { Icon, Metrics } from '@theme/';
import TeamsNavigator from '@navigators/TeamsNavigator';
 
class TeamsContainer extends React.Component {
  static navigationOptions = {
    title: I18n.t('TEAMS'),
     
  }
  render() {
    return (
      <TeamsNavigator />
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
