import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import getStore from '../store';

describe('App test', () => {
  it('checks for HomeScreen text getting rendered on home route', () => {
    const wrapper = render(
      <Provider store={getStore()}>
        <MemoryRouter initialEntries={['/home']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.text()).to.contain('Hello World !');
  });
});
