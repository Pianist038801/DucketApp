import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import {setGamesNavigator} from '@actions/route';

import { Styles, Colors, Metrics, Fonts } from '@theme/';

class GameList extends Component{
    constructor(props)
    {
        super(props);
        this.state={};

    }
    render()
    {
        return(
            <View>
                <Text>GameList</Text>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setGamesNavigator: homeNavigator => dispatch(setGamesNavigator(gamesNavigator)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
