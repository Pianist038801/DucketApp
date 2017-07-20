import { DrawerNavigator } from 'react-navigation';

import AdminContainer from '@containers/AdminContainer';
import GamesContainer from '@containers/GamesContainer';
import RulesContainer from '@containers/RulesContainer';
import SettingsContainer from '@containers/SettingsContainer';
import TeamsContainer from '@containers/TeamsContainer';
 
import { Colors, Fonts, Metrics } from '@theme/';

const routeConfigs = {
  admin: { screen: AdminContainer },
  games: { screen: GamesContainer },
  rules: { screen: RulesContainer },
  settings: { screen: SettingsContainer },
  teams: { screen: TeamsContainer },
};
const navigatorConfig = {
  drawerWidth: Metrics.screenWidth * 2 / 3,
  initialRouteName: 'games',
  contentOptions: { 
    
    activeTintColor: Colors.brandPrimary,
    inactiveTintColor: Colors.textFourth,
    labelStyle: { ...Fonts.style.tabButtonText },
    indicatorStyle: { height: 0 },
    scrollEnabled: false,
    style: {
      backgroundColor: Colors.backgroundPrimary,
      height: Metrics.tabBarHeight,
      borderColor: Colors.borderPrimary,
      borderTopWidth: 0.5,
    },
  },
};

const MainNavigator = DrawerNavigator(routeConfigs, navigatorConfig);

export default MainNavigator;