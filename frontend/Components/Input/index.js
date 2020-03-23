import React, { useState } from 'react';
import { VelocityContext } from '../App';

const Input = () => {
  const velocityContext = React.useContext(VelocityContext);
  const { value, min, max, setValue } = velocityContext;
  const [isValid, setIsValid] = useState(true);

  const validate = value => value >= min && value <= max;

  const onChange = e => {
    const newValue = e.target.value;
    if (validate(newValue)) {
      setIsValid(true);
      setValue(newValue);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="input-group">
      <label>Velocity:</label>
      <input
        type="number"
        name="velocity"
        placeholder="velocity relate to the observer"
        value={value}
        onChange={onChange}
      />
      {isValid ? null : (
        <p className="error">
          Velocity must be between {min} and {max}!
        </p>
      )}
    </div>
  );
};

export default Input;
