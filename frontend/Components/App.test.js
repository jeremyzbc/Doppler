import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Star from './Star';
import Input from './Input';
import Slider from './Slider';

describe('App', () => {
  let wrapper;

  function setup() {
    wrapper = shallow(<App />);
  }

  it('should show `Star`, `Input` and `Slider` components', () => {
    setup();
    expect(wrapper.find(Star).length).toEqual(1);
    expect(wrapper.find(Input).length).toEqual(1);
    expect(wrapper.find(Slider).length).toEqual(1);
  });
});
