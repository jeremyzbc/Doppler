import { isBetween, getColorCode, mapVelocityToColor } from './index';

describe('utils', () => {
  it('isBetween should return boolean value if it is a number and is in range', () => {
    expect(isBetween('', [1, 3])).toEqual(false);
    expect(isBetween(2, [1, 3])).toEqual(true);
    expect(isBetween(0.5, [1, 3])).toEqual(false);
  });

  it('getColorCode should return color code base on wavelength', () => {
    const RED_LIGHT_WAVELENGTH = 650;
    const VIOLET_LIGHT_WAVELENGTH = 390;
    const INVISIBLE_LIGHT_WAVELENGTH = 1000;
    expect(getColorCode(RED_LIGHT_WAVELENGTH)).toEqual('#FF0000');
    expect(getColorCode(VIOLET_LIGHT_WAVELENGTH)).toEqual('#9400D3');
    expect(getColorCode(INVISIBLE_LIGHT_WAVELENGTH)).toEqual('transparent');
  });

  it('mapVelocityToColor should return right color code base on velocity', () => {
    expect(mapVelocityToColor(100)).toEqual('#FF0000');
    expect(mapVelocityToColor(-100)).toEqual('#9400D3');
  });
});
