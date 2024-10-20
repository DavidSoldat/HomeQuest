'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <MdArrowForwardIos
        size={30}
        style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.3) -2px 0px 2px)' }}
      />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <MdArrowBackIos
        style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.3) -2px 0px 2px)' }}
        size={30}
      />
    </div>
  );
};

const ClientCarousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="group relative">
      <Slider {...settings}>
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`Property image`}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
