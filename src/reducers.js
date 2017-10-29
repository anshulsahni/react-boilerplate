/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homeReducer from './modules/pages/Home/reducers';


/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default combineReducers({
  routing: routerReducer,
  home: homeReducer,
});
