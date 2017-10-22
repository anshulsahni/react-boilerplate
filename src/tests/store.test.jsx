/**
 * Test store addons
 */

import { browserHistory } from 'react-router';
import { expect } from 'chai';

import configureStore from '../store';

describe('store', () => {
  let store;

  beforeEach(() => {
    store = configureStore({}, browserHistory);
  });

  describe('dispatch', () => {
    it('should contain an dispatch function', () => {
      expect(typeof store.dispatch).to.equal('function');
    });
  });

  describe('subscribe', () => {
    it('should contain a subscribe function', () => {
      expect(typeof store.subscribe).to.equal('function');
    });
  });

  describe('getState', () => {
    it('should contain a getState function', () => {
      expect(typeof store.getState).to.equal('function');
    });
  });
});
