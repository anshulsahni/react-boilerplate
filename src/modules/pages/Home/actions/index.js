import {
  FETCH_USER,
  CHANGE_NETWORK_BUSY_STATUS,
  SET_ERROR,
  LOAD_USER,
} from '../constants';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const changeNetworkBusyStatus = networkBusy => ({
  type: CHANGE_NETWORK_BUSY_STATUS,
  networkBusy,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});

export const loadUser = user => ({
  type: LOAD_USER,
  user,
});
