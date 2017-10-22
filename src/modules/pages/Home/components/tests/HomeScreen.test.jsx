import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen /> Render', () => {
  it('checks for single div being rendered', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('checks for text being rendered', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.text()).to.be.equal('Hello World !');
  });
});
