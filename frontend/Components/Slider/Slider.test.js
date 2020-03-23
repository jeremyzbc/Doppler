import React from 'react';
import { shallow } from 'enzyme';
import Slider from './index';
import { MAX_VELOCITY, MIN_VELOCITY } from '../../constants';

describe('Slider', () => {
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
    wrapper = shallow(<Slider />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render label, range input', () => {
    setup();
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('input[type="range"]').length).toEqual(1);
  });

  it('should update velocity when log scale range changed', () => {
    setup();
    const input = wrapper.find('input[type="range"]').at(0);
    input.simulate('change', { target: { value: 1 } });
    expect(setValueSpy).toHaveBeenCalledWith(100);
    input.simulate('change', { target: { value: 0 } });
    input.simulate('change', { target: { value: 0.5 } });
    const paramOfSimulationOne = setValueSpy.mock.calls[0][0];
    const paramOfSimulationTwo = setValueSpy.mock.calls[1][0];
    const paramOfSimulationThree = setValueSpy.mock.calls[2][0];
    expect(paramOfSimulationOne).toEqual(100);
    expect(paramOfSimulationTwo).toEqual(-100);
    expect(paramOfSimulationThree).toBeLessThan(0);
  });
});
