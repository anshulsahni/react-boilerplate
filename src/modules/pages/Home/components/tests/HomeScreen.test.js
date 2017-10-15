import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen /> Render', () => {
  it('checks for right text being rendered', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
