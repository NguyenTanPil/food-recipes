import { useState } from 'react';
import {
  Container,
  PrevButton,
  NextButton,
  Images,
  ImageItem,
} from './SliderStyles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const images = [
  'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg',
  'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-9-1240x578.jpg',
  'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-6-1240x578.jpg',
];

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
            {current === index && <img src={image} alt="slide" />}
          </ImageItem>
        ))}
      </Images>
    </Container>
  );
};

export default Slider;
