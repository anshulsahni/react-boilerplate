import { fork } from 'redux-saga/effects';

import fetchRandomUserDetails from './modules/pages/Home/sagas/fetchRandomUserDetails';

export default function* sagas() {
  yield fork(fetchRandomUserDetails);
}
