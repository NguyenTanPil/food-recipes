import { useState } from 'react';
import {
  Container,
  PrevButton,
  NextButton,
  Images,
  ImageItem,
} from './SliderStyles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import getImageByKey from '../../Utils/getImageByKey';

const images = ['slide01', 'slide02', 'slide03'];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const handleNextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <Container>
      <PrevButton onClick={handlePrevSlide}>
        <MdKeyboardArrowLeft />
      </PrevButton>
      <NextButton onClick={handleNextSlide}>
        <MdKeyboardArrowRight />
      </NextButton>
      <Images>
        {images.map((image, index) => (
          <ImageItem key={index} active={current === index ? 1 : 0}>
            {current === index && (
              <img src={getImageByKey(image)} alt="slide" />
            )}
          </ImageItem>
        ))}
      </Images>
    </Container>
  );
};

export default Slider;
