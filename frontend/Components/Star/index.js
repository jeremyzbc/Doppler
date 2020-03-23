import React from 'react';
import { VelocityContext } from '../App';
import starImage from '../../images/star-small.png';
import { mapVelocityToColor } from '../../utils';

const Star = () => {
  const velocityContext = React.useContext(VelocityContext);
  return (
    <div
      className="star"
      style={{
        backgroundImage: `url("${starImage}")`,
        backgroundColor: mapVelocityToColor(velocityContext.value)
      }}
    />
  );
};

export default Star;
