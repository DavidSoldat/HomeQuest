'use client';

import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import PropertyCard from './SoldPropertyCard';
import { formatNumber } from '../_lib/helpers';

export default function Carousel({ slides, OPTIONS, agent }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <section className="embla lg:max-w-[750px]">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-bold text-gray-700">Recent Sales</h2>
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <PropertyCard property={slide} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">{slides.length}</span>
          Total sales
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">
            {formatNumber(agent.rangeLower)} - {formatNumber(agent.rangeUpper)}
          </span>
          Price range
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">
            {formatNumber((agent.rangeLower + agent.rangeUpper) / 2)}
          </span>
          Average price
        </div>
      </div>
    </>
  );
}
