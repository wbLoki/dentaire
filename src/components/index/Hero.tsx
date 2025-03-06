'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FiPhoneCall } from 'react-icons/fi';
import majd from '../../media/majd.jpg';
import { useTranslations } from 'next-intl';
import { contact } from '@/src/constants';

type Props = {};

function Hero() {
  const t = useTranslations('Hero');
  return (
    <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 min-h-[50%]">
      <div className="flex flex-col items-center px-4 xl:px-16 2xl:pr-10 text-center lg:text-left">
        <h1 className="lg:row-span-3 text-4xl md:text-5xl xl:text-6xl p-4 text-white">
          {t('title')}
        </h1>
        <div className="lg:row-span-2 space-y-10">
          <h2 className="text-white text-base">{t('subtitle')}</h2>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 place-items-center text-xs gap-2">
            <div className="w-full">
              <Link href="#location">
                <button className="flex justify-center text-white w-full shine-text rounded-2xl px-8 py-5 lg:px-6 xl:py-5 2xl:px-12">
                  <span className="text-medium">{t('contact-us')}</span>
                </button>
              </Link>
            </div>
            <button className="flex items-center w-full bg-white/60 p-2 rounded-xl gap-4">
              <div className="bg-white p-3 w-fit rounded-xl">
                <FiPhoneCall className="text-primary text-lg" />
              </div>
              <div
                className="grid grid-rows-2 text-left gap-0 items-center"
                onClick={() => {
                  window.location.href = 'tel:0774767832';
                }}
              >
                <span className="uppercase text-primary">24h emergency</span>
                <span className="ltr">{contact.phone}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* To be deleted later */}
      {/* <div className='mx-auto w-[85%] lg:w-[70%] space-y-10 text-center'>
            <h2 className='text-lg lg:text-4xl text-center leading-loose'>
                Le dentiste réinvente ce que peut être l&apos;expérience dentaire et établit fièrement une nouvelle norme pour les soins aux patients.
            </h2>
            <div className='h-1 w-32 bg-purple rounded-full mx-auto'></div>
        </div> */}
    </div>
  );
}

export default Hero;
