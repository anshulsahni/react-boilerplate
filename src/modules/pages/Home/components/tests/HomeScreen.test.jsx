import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen /> Render', () => {
  it('home screen being rendered', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('.home-screen')).to.have.length(1);
  });

  it('checks if pre-loader is working', () => {
    const wrapper = shallow(<HomeScreen loading />);

    expect(wrapper.find('.user-details')).to.have.length(0);
    expect(wrapper.find('.error')).to.have.length(0);
    expect(wrapper.find('.pre-loader')).to.have.length(1);
    expect(wrapper.text()).to.be.equal('Loading...');
  });

  it('checks if user gets displayed when supplied', () => {
    const name = {
      title: 'Mr.',
      first: 'Anshul',
      last: 'Sahni',
    };

    const wrapper = shallow(<HomeScreen user={{ name }} />);

    expect(wrapper.find('.pre-loader')).to.have.length(0);
    expect(wrapper.find('.error')).to.have.length(0);
    expect(wrapper.find('.user-details')).to.have.length(1);
    expect(wrapper.text()).to.have.string('Mr. Anshul Sahni');
  });

  it('checks if error gets displayed when supplied', () => {
    const expectedText = 'Unexpected Error Occured Please reload';
    const wrapper = shallow(<HomeScreen error="Error-Code 502" />);

    expect(wrapper.find('.pre-loader')).to.have.length(0);
    expect(wrapper.find('.user-details')).to.have.length(0);
    expect(wrapper.find('.error')).to.have.length(1);
    expect(wrapper.text()).to.have.string(expectedText);
  });
});
