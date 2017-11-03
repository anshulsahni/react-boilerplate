import { expect } from 'chai';

import * as constants from '../../constants';
import reducer from '../';

describe('Home: Reducers', () => {
  describe('Without action', () => {
    it('should return default state', () => {
      expect(reducer(undefined, {})).to.deep.equal({
        user: {},
        networkBusy: false,
        error: '',
      });
    });
  });

  describe('CHANGE_NETWORK_BUSY_STATUS', () => {
    it('should return state with networkBusy as true', () => {
      const dispatchedAction = {
        type: constants.CHANGE_NETWORK_BUSY_STATUS,
        networkBusy: true,
      };

      const expectedState = {
        user: {},
        networkBusy: true,
        error: '',
      };

      expect(reducer(undefined, dispatchedAction)).to.deep.equal(expectedState);
    });

    it('should return state with networkBusy as false', () => {
      const dispatchedAction = {
        type: constants.CHANGE_NETWORK_BUSY_STATUS,
        networkBusy: false,
      };

      const currentSampleState = {
        user: {},
        networkBusy: true,
        error: '',
      };

      const expectedState = {
        user: {},
        networkBusy: false,
        error: '',
      };

      expect(reducer(currentSampleState, dispatchedAction)).to.deep.equal(expectedState);
    });
  });

  describe('LOAD_USER', () => {
    it('return state with loaded user', () => {
      const user = {
        name: 'Sample state',
        id: 1,
      };

      const dispatchedAction = {
        type: constants.LOAD_USER,
        user,
      };

      const expectedState = {
        networkBusy: false,
        error: '',
        user,
      };

      expect(reducer(undefined, dispatchedAction)).to.deep.equal(expectedState);
    });
  });

  describe('SET_ERROR', () => {
    it('returns state with error being set', () => {
      const error = 'Unknown Error';

      const dispatchedAction = {
        type: constants.SET_ERROR,
        error,
      };

      const expectedState = {
        user: {},
        networkBusy: false,
        error,
      };

      expect(reducer(undefined, dispatchedAction)).to.deep.equal(expectedState);
    });
  });
});
