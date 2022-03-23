import addRed from '../assets/add-red.png';
import addBlue from '../assets/add-blue.png';
import addYellow from '../assets/add-yellow.png';
import addGreen from '../assets/add-green.png';
import addPurple from '../assets/add-purple.png';
import addPink from '../assets/add-pink.png';

import cookingRed from '../assets/cooking-red.svg';
import cookingBlue from '../assets/cooking-blue.svg';
import cookingYellow from '../assets/cooking-yellow.svg';
import cookingGreen from '../assets/cooking-green.svg';
import cookingPurple from '../assets/cooking-purple.svg';
import cookingPink from '../assets/cooking-pink.svg';

import barbecueRed from '../assets/barbecue-red.svg';
import barbecueBlue from '../assets/barbecue-blue.svg';
import barbecueYellow from '../assets/barbecue-yellow.svg';
import barbecueGreen from '../assets/barbecue-green.svg';
import barbecuePurple from '../assets/barbecue-purple.svg';
import barbecuePink from '../assets/barbecue-pink.svg';

export default function getImageByKey(key) {
  const images = {
    addRed,
    addBlue,
    addYellow,
    addGreen,
    addPurple,
    addPink,
    cookingRed,
    cookingBlue,
    cookingYellow,
    cookingGreen,
    cookingPurple,
    cookingPink,
    barbecueRed,
    barbecueBlue,
    barbecueYellow,
    barbecueGreen,
    barbecuePurple,
    barbecuePink,
  };

  return images[key];
}
