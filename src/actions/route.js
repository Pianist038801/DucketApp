import Types from './actionTypes';

export const setGamesNavigator = gamesNavigator =>
  ({ type: Types.SET_GAMES_NAVIGATOR, gamesNavigator });
export const setTeamsNavigator = teamsNavigator =>
  ({ type: Types.SET_TEAMS_NAVIGATOR, teamsNavigator });
export const setSettingsNavigator = settingsNavigator =>
  ({ type: Types.SET_SETTINGS_NAVIGATOR, settingsNavigator });
export const setRulesNavigator = rulesNavigator =>
  ({ type: Types.SET_RULES_NAVIGATOR, rulesNavigator });
export const setAdminNavigator = adminNavigator =>
  ({ type: Types.SET_ADMIN_NAVIGATOR, adminNavigator });
export const setAppNavigator = appNavigator =>
  ({ type: Types.SET_APP_NAVIGATOR, appNavigator });
export const setMainNavigator = mainNavigator =>
  ({ type: Types.SET_MAIN_NAVIGATOR, mainNavigator });