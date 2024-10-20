'use client';

import Image from 'next/image';
import { convertNumber, formatPrice } from '../_lib/helpers';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function PropertyPage({ property }) {
  const firstImage = property.images[0];

  return (
    <div className="flex w-full flex-col gap-5 px-5">
      <div className="block md:hidden">
        <Swiper spaceBetween={10} slidesPerView={1} className="h-full">
          {property.images.map((image, i) => (
            <SwiperSlide key={i} className="w-full">
              <div className="relative aspect-square w-full">
                <Image
                  alt="Property image"
                  src={image}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden h-[440px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-lg md:grid">
        <div className="relative col-span-2 row-span-2 h-full">
          <Image
            alt="Property image"
            src={firstImage}
            fill
            priority
            className="object-cover"
          />
        </div>
        {property.images.slice(1).map((image, i) => (
          <div className="relative h-full" key={i}>
            <Image
              alt="Property image"
              src={image}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex w-full gap-5">
        <div className="flex w-[70%] flex-col gap-5">
          <div className="flex justify-between border-b border-solid border-[#D1D1D5] pb-5">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-800">
                {formatPrice(property.price)}
              </span>
              <div>
                <h1 className="text-xl font-light leading-8">
                  {property.address}, {property.city}
                </h1>
              </div>
            </div>
            <div className="flex items-start gap-4 text-xl font-normal leading-8 text-gray-800">
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl font-bold">
                  {convertNumber(property.bedrooms)}
                </span>
                beds
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl font-bold">
                  {convertNumber(property.bathrooms)}
                </span>
                baths
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl font-bold">{property.sqmeter}</span>
                sq m
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-gray-800">
              More about this property
            </h1>
            <div>
              <p>
                Completely renovated light filled 1-bedroom condo in the highly
                desirable Dearborn Park neighborhood of the South Loop. Living
                room/dining room combination features wood flooring and corner
                window. The open kitchen offers granite breakfast bar and
                countertops, stainless steel appliances, under mount cabinet
                lighting and tile backsplash. Very large bedroom with double
                closets (one is huge walk-in closet). The bathroom has
                kitchen-height granite vanity and shower/tub combo. Move right
                in!!! Part-time door staff, onsite management, building
                engineer, additional storage, receiving room and community room
                and 24/7 neighborhood security. Parking for rent or purchase in
                the attached garage. In turn-key condition, this super cool
                space is in turn-key condition, in the BEST location and has a
                very high walk score. Close to all public transportation, the
                Lake, the Loop, Target, Jewel, Whole Foods, Marianos, Trader
                Joes, Grant Park and easy access to all expressways!
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-fit w-1/3">
          <div className="contactProperty sticky top-10 flex w-full flex-col items-center justify-center gap-5 p-5">
            <button className="flex w-full flex-col items-center justify-center rounded-md border bg-blue-600 px-4 py-2 text-base font-bold text-white hover:bg-blue-700">
              <span>Request a tour</span>
              <p className="text-xs font-light">as early as Monday!</p>
            </button>
            <Button className="w-full border border-blue-600 px-4 py-2 text-base font-bold text-blue-600 hover:border-blue-700 hover:text-blue-700">
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
