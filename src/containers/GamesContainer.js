import React from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';

import { Icon, Metrics } from '@theme/';
import GamesNavigator from '@navigators/GamesNavigator';

class GamesContainer extends React.Component {
  static navigationOptions = {
    title: I18n.t('GAMES'),
    
  }
  render() {
    return (
      <GamesNavigator />
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

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
