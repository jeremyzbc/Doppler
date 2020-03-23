import React, { useState } from 'react';
import Star from './Star';
import Input from './Input';
import Slider from './Slider';
import { MAX_VELOCITY, MIN_VELOCITY } from '../constants';

export const VelocityContext = React.createContext();

const App = () => {
  const [velocity, setVelocity] = useState(0);
  return (
    <VelocityContext.Provider
      value={{
        min: MIN_VELOCITY,
        max: MAX_VELOCITY,
        value: velocity,
        setValue: setVelocity
      }}
    >
      <div className="container">
        <div className="container-top">
          <Star />
        </div>
        <div className="container-bottom">
          <Input />
          <Slider />
        </div>
      </div>
    </VelocityContext.Provider>
  );
};

export default App;
