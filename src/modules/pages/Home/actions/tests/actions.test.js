import { expect } from 'chai';

import * as constants from '../../constants';
import * as actions from '../';

describe('Home:Action Creators', () => {
  describe('FETCH_USER', () => {
    const expectedAction = {
      type: constants.FETCH_USER,
    };

    it('should create action to initiate fetching user', () => {
      expect(actions.fetchUser()).to.deep.equal(expectedAction);
    });
  });

  describe('CHANGE_NETWORK_BUSY_STATUS', () => {
    it('should create action to change network busy status to true', () => {
      const expectedAction = { type: constants.CHANGE_NETWORK_BUSY_STATUS, networkBusy: true };
      expect(actions.changeNetworkBusyStatus(true)).to.deep.equal(expectedAction);
    });

    it('should create action to change networkBusy status to false', () => {
      const expectedAction = { type: constants.CHANGE_NETWORK_BUSY_STATUS, networkBusy: false };
      expect(actions.changeNetworkBusyStatus(false)).to.deep.equal(expectedAction);
    });
  });

  describe('SET_ERROR', () => {
    const error = 'Unknown Error';
    const expectedAction = {
      type: constants.SET_ERROR,
      error,
    };

    it('should create action to set error', () => {
      expect(actions.setError(error)).to.deep.equal(expectedAction);
    });
  });

  describe('LOAD_USER', () => {
    const user = { name: 'sample' };
    const expectedAction = {
      type: constants.LOAD_USER,
      user,
    };

    it('should return an action to load user', () => {
      expect(actions.loadUser(user)).to.deep.equal(expectedAction);
    });
  });
});
