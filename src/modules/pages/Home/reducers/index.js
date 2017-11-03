import createReducer from 'simplify-redux/createReducer';

import { CHANGE_NETWORK_BUSY_STATUS, SET_ERROR, LOAD_USER } from '../constants';

const initialState = {
  user: {},
  networkBusy: false,
  error: '',
};

const onChangeNetworkBusyStatus = (state, { networkBusy }) => ({
  ...state,
  networkBusy,
});

const onLoadUser = (state, { user }) => ({
  ...state,
  user,
});

const onSetError = (state, { error }) => ({
  ...state,
  error,
});

export default createReducer(initialState, {
  [CHANGE_NETWORK_BUSY_STATUS]: onChangeNetworkBusyStatus,
  [LOAD_USER]: onLoadUser,
  [SET_ERROR]: onSetError,
});
