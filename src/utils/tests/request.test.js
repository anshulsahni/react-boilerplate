import { expect } from 'chai';
import nock from 'nock';

import request from '../request';

const sampleHost = 'http://www.example/com';
const sampleResource = 'test';
const sampleGetResponse = { resources: [1] };


describe('Request module', () => {
  describe('Method: GET', () => {
    beforeEach(() => {
      nock(sampleHost)
        .get(`/${sampleResource}`)
        .reply(200, sampleGetResponse);
    });

    it('checks functionality of request.get', () => {
      request.get(`${sampleHost}/${sampleResource}`)
        .then(response => {
          expect(response).to.deep.equal(sampleGetResponse);
        });
    });
  });

  describe('MethodL POST', () => {
    beforeEach(() => {
      nock(sampleHost)
        .post(`/${sampleResource}`)
        .reply(200, sampleGetResponse);
    });

    it('checks functionality of request.post', () => {
      request.post(`${sampleHost}/${sampleResource}`)
        .then(reponse => {
          expect(reponse).to.deep.equal(sampleGetResponse);
        });
    });
  });
});
