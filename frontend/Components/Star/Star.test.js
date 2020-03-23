import React from 'react';
import { shallow } from 'enzyme';
import Star from './index';
import starImage from '../../images/star-small.png';
import { MAX_VELOCITY, MIN_VELOCITY } from '../../constants';

describe('Star', () => {
  let wrapper;

  function setup(velocity = 100) {
    const context = {
      min: MIN_VELOCITY,
      max: MAX_VELOCITY,
      value: velocity,
      setValue: jest.fn()
    };
    jest.spyOn(React, 'useContext').mockImplementation(() => context);
    wrapper = shallow(<Star />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with background image', () => {
    setup();
    const style = wrapper.find('.star').get(0).props.style;
    expect(style).toHaveProperty('backgroundImage', `url("${starImage}")`);
  });

  it('should render red background color when velocity is 100', () => {
    setup(100);
    const style = wrapper.find('.star').get(0).props.style;
    expect(style).toHaveProperty('backgroundColor', `#FF0000`);
  });

  it('should render violet background color when velocity is -100', () => {
    setup(-100);
    const style = wrapper.find('.star').get(0).props.style;
    expect(style).toHaveProperty('backgroundColor', `#9400D3`);
  });
});
