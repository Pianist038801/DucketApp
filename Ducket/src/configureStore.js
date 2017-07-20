import { applyMiddleware, compose, createStore } from 'redux';
import createReducer from '@reducers';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger({predicate : (getState, action) => __DEV__ });

function configureStore(initialState) {
   const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
 
  const store = createStore(
    createReducer(),
    initialState,
    enhancer
  );
  
  return store;
}

module.exports = configureStore;
