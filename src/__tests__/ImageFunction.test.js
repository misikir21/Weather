import chooseImage from '../components/ImageFunction';
import runing from '../Image/hail-weather-and-winter-cloud-16559.png';
import sun from '../Image/yellow-sun-16526.png';
import pratSun from '../Image/yellow-sun-and-blue-cloud-16528.png';
import clouds from '../Image/cloud-and-yellow-lightning-16534.png';

describe('chooseImage', () => {
  test('returns correct image for temperature', () => {
    expect(chooseImage(12)).toEqual(clouds);
    expect(chooseImage(16)).toEqual(pratSun);
    expect(chooseImage(25)).toEqual(sun);
    expect(chooseImage(-5)).toEqual(runing);
    expect(chooseImage(15)).toEqual(clouds);
  });
});
