import addRed from '../assets/add-red.png';
import addBlue from '../assets/add-blue.png';
import addYellow from '../assets/add-yellow.png';
import addGreen from '../assets/add-green.png';
import addPurple from '../assets/add-purple.png';
import addPink from '../assets/add-pink.png';

export default function getImageByKey(key) {
  const images = {
    red: addRed,
    blue: addBlue,
    yellow: addYellow,
    green: addGreen,
    purple: addPurple,
    pink: addPink,
  };
  return images[key];
}
