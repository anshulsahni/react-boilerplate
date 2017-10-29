import { takeEvery, put } from 'redux-saga/effects';

import { getRandomUser } from '../../../../api/randomUser';

import { FETCH_USER } from '../constants';
import {
  changeNetworkBusyStatus,
  loadUser,
  setError,
} from '../actions';

function* fetchUser() {
  try {
    yield put(changeNetworkBusyStatus(true));
    const { results: users } = yield getRandomUser();
    yield put(loadUser(users[0]));
    yield put(changeNetworkBusyStatus(false));
  } catch (error) {
    yield put(setError(error));
  }
}

function* fetchRandomUserDetails() {
  yield takeEvery(FETCH_USER, fetchUser);
}

export default fetchRandomUserDetails;
