import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';
import { MAX_VELOCITY, MIN_VELOCITY } from '../../constants';

describe('Input', () => {
  let wrapper;
  let setValueSpy;

  function setup(velocity = 100) {
    const context = {
      min: MIN_VELOCITY,
      max: MAX_VELOCITY,
      value: velocity,
      setValue: jest.fn()
    };
    setValueSpy = jest.spyOn(context, 'setValue');
    jest.spyOn(React, 'useContext').mockImplementation(() => context);
    wrapper = shallow(<Input />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render label, number input', () => {
    setup();
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
  });

  it('should update velocity when user typed a number between -100 and 100', () => {
    setup();
    const input = wrapper.find('input[type="number"]').at(0);
    expect(input.length).toEqual(1);
    input.simulate('change', { target: { value: 100 } });
    expect(setValueSpy).toHaveBeenCalledWith(100);
    input.simulate('change', { target: { value: -100 } });
    expect(setValueSpy).toHaveBeenCalledWith(-100);
  });

  it('should not update velocity and show an error message when user typed a number that is not between -100 and 100', () => {
    setup();
    const input = wrapper.find('input[type="number"]').at(0);
    input.simulate('change', { target: { value: 200 } });
    expect(setValueSpy).not.toHaveBeenCalled();
    expect(wrapper.find('.error').length).toEqual(1);
  });
});
