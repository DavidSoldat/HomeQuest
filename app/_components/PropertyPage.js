'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BiBuildingHouse } from 'react-icons/bi';
import { IoHammerOutline } from 'react-icons/io5';
import { LiaRulerCombinedSolid } from 'react-icons/lia';
import { TbHomeDollar } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import {
  calculateDaysOrHours,
  capitalize,
  convertNumber,
  formatNumber,
  formatPrice,
  getLabelByValue,
  pricePerSqm,
} from '../_lib/helpers';
import ContactPropertyForm from './ContactPropertyForm';

export default function PropertyPage({ property, agent }) {
  const firstImage = property.images[0];
  return (
    <div className="flex w-full flex-col gap-5 px-2 md:px-5">
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

      <div className="hidden h-[440px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl md:grid">
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

      <div className="flex w-full flex-col gap-5 pb-5 md:flex-row">
        <div className="flex flex-col gap-5 md:w-[70%]">
          <div className="flex flex-col gap-5 border-b border-solid border-[#D1D1D5] pb-5">
            <div className="flex w-full justify-between">
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
            <div className="grid h-fit w-full grid-cols-2 grid-rows-2 gap-3 text-gray-800">
              <div className="flex items-center gap-2 rounded-md bg-gray-100 p-3">
                <BiBuildingHouse size={20} />
                <span>{capitalize(property.propertyType)}</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-gray-100 p-3">
                <IoHammerOutline size={20} />{' '}
                <span>Built in {property.builtYear} </span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-gray-100 p-3">
                <LiaRulerCombinedSolid size={20} />{' '}
                <span>{pricePerSqm(property.price, property.sqmeter)}/sqm</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-gray-100 p-3">
                <TbHomeDollar size={20} />{' '}
                <span>${formatNumber(property.HOA)}/mo HOA</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-b border-solid border-[#D1D1D5] pb-5">
            <h1 className="text-2xl font-bold text-gray-800">
              More about this property
            </h1>
            <div>
              <p>{property.about}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-b border-solid border-[#D1D1D5] pb-5">
            <h1 className="text-2xl font-bold text-gray-800">Features</h1>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-sm font-semibold uppercase text-gray-800"
                >
                  {getLabelByValue(feature)}
                </span>
              ))}
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-semibold">
                    {calculateDaysOrHours(property.createdAt)}
                  </span>{' '}
                  on Home Quest
                </div>
                <div>
                  Listing by:{' '}
                  <span className="font-semibold">{agent.name}</span>,{' '}
                  {agent.company}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-b border-solid border-[#D1D1D5] pb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Contact a Buyer&apos;s Agent
              </h1>
              <span>
                Connect with a local buyer&apos;s agent who advertises with Home
                Quest.
              </span>
            </div>
            <ContactPropertyForm property={property} />
          </div>
        </div>
        <div className="flex h-fit md:w-1/3">
          <div className="contactProperty sticky top-10 flex w-full flex-col items-center justify-center gap-5 p-5">
            <button className="flex w-full flex-col items-center justify-center rounded-md border bg-blue-600 px-4 py-2 text-base font-bold text-white hover:bg-blue-700">
              <span>Request a tour</span>
              <p className="text-xs font-light">as early as Monday!</p>
            </button>
            <Button className="w-full border border-blue-600 px-4 py-2 text-base font-bold text-blue-600 hover:border-blue-700 hover:text-blue-700">
              Contact an agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
