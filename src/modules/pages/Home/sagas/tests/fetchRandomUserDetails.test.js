import { put, call } from 'redux-saga/effects';
import { assert } from 'chai';

import { fetchUser } from '../fetchRandomUserDetails';
import { getRandomUser } from '../../../../../api/randomUser';
import { changeNetworkBusyStatus, loadUser } from '../../actions';

describe('fetchRandomUserDetails saga test', () => {
  it('tests the basic function of saga', () => {
    const generator = fetchUser();
    assert.deepEqual(
      generator.next().value,
      put(changeNetworkBusyStatus(true)),
      'yields changeNetworkBusyStatus action true',
    );

    assert.deepEqual(
      generator.next().value,
      call(getRandomUser),
      'yields getRandomUser api call',
    );

    const sampleUser = {
      name: {
        title: 'Mr.',
        first: 'Anshul',
        last: 'Sahni',
      },
    };

    assert.deepEqual(
      generator.next({ results: [sampleUser] }).value,
      put(loadUser(sampleUser)),
      'yields loadUser action',
    );

    assert.deepEqual(
      generator.next().value,
      put(changeNetworkBusyStatus(false)),
      'yields changeNetworkBusyStatus action with false'
    );

    assert.strictEqual(
      generator.next().done,
      true,
      'generator is done',
    );
  });
});
