import runing from '../Image/hail-weather-and-winter-cloud-16559.png';
import sun from '../Image/yellow-sun-16526.png';
import pratSun from '../Image/yellow-sun-and-blue-cloud-16528.png';
import clouds from '../Image/cloud-and-yellow-lightning-16534.png';

const chooseImage = (degree) => {
  if (degree > 20) {
    return sun;
  }
  if (degree > 15) {
    return pratSun;
  }
  if (degree > 10) {
    return clouds;
  }

  return runing;
};

export default chooseImage;
