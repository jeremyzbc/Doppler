import React from 'react';
import { VelocityContext } from '../App';

const Slider = () => {
  const velocityContext = React.useContext(VelocityContext);
  const { value, min, max, setValue } = velocityContext;
  const getRageFromVelocity = velocity =>
    Math.sqrt(velocity - min) / Math.sqrt(max - min);
  const getVelocityFromRange = rangeValue =>
    Math.pow(rangeValue * Math.sqrt(max - min), 2) + min;

  const onChange = e => {
    const rangeValue = e.target.value;
    const velocity = getVelocityFromRange(rangeValue);
    // use `Number.EPSILON` to ensure things like 1.005 round correctly
    const roundVelocity = Math.round((velocity + Number.EPSILON) * 100) / 100;
    setValue(roundVelocity);
  };

  return (
    <div className="input-group">
      <label>Velocity slider:</label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={getRageFromVelocity(value)}
        onChange={onChange}
      />
      <span>{value}</span>
    </div>
  );
};

export default Slider;
