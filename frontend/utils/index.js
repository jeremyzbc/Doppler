import {
  MAX_VELOCITY,
  MIN_VELOCITY,
  LIGHT_WAVELENGTH_RANGES,
  YELLOW_LIGHT_WAVELENGTH
} from '../constants';

const {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  INDIGO,
  VIOLET
} = LIGHT_WAVELENGTH_RANGES;

export const isBetween = (number, range) => {
  if (typeof number === 'number')
    return number >= range[0] && number <= range[1];
  return false;
};

export const getWaveLength = velocity => {
  if (velocity > 0) {
    return (
      YELLOW_LIGHT_WAVELENGTH -
      (velocity / MAX_VELOCITY) * (YELLOW_LIGHT_WAVELENGTH - RED[1])
    );
  }
  if (velocity < 0) {
    return (
      YELLOW_LIGHT_WAVELENGTH -
      (velocity / MIN_VELOCITY) * (YELLOW_LIGHT_WAVELENGTH - VIOLET[0])
    );
  }
  return YELLOW_LIGHT_WAVELENGTH;
};

export const getColorCode = wavelength => {
  if (isBetween(wavelength, RED)) return '#FF0000';
  if (isBetween(wavelength, ORANGE)) return '#FF7F00';
  if (isBetween(wavelength, YELLOW)) return 'transparent';
  if (isBetween(wavelength, GREEN)) return '#00FF00';
  if (isBetween(wavelength, BLUE)) return '#0000FF';
  if (isBetween(wavelength, INDIGO)) return '#4B0082';
  if (isBetween(wavelength, VIOLET)) return '#9400D3';
  return 'transparent';
};

export const mapVelocityToColor = velocity => {
  const wavelength = getWaveLength(velocity);
  return getColorCode(wavelength);
};
