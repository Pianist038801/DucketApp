import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  homeTab: 'AN10NA',
  spinnerVisible: false,
  userInfo: null,
});

const homeTab = (state, action) => ({
  ...state,
  homeTab: action.homeTab,
});

const spinnerVisible = (state, action) => ({
  ...state,
  spinnerVisible: action.spinnerVisible,
});

const setUserInfo = (state, action) => ({
  ...state,
  userInfo: action.userInfo,
});

const actionHandlers = {
  [Types.SET_HOME_TAB]: homeTab,
  [Types.SET_SPINNER_VISIBLE]: spinnerVisible,
  [Types.SET_USER_INFO]: setUserInfo,
};

export default createReducer(initialState, actionHandlers);
