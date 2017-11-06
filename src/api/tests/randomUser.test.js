import { expect } from 'chai';

import { getRandomUser } from '../randomUser';

describe('API: randomUser', () => {
  describe('getRandomUser', () => {
    it('random user being fetched has correct structure', (done) => {
      getRandomUser()
        .then((fetchedResult) => {
          expect(fetchedResult).to.include.nested.keys('results');
          expect(Array.isArray(fetchedResult.results)).to.be.equal(true);
          expect(fetchedResult.results[0].name).to.have.keys('title', 'first', 'last');
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});
