'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import majd from '../../media/majd.jpg';
import { useTranslations } from 'next-intl';
import { contact } from '@/src/constants';
import { Button } from '@nextui-org/react';

function Hero() {
  const t = useTranslations('Hero');
  return (
    <div className="relative text-white max-w-5xl mx-auto grid lg:grid-cols-2 min-h-[50%]">
      <div className="flex flex-col items-center px-4 xl:px-16 2xl:pr-10 text-center lg:text-left">
        <h1 className="lg:row-span-3 text-4xl md:text-5xl xl:text-6xl p-4">
          {t('title')}
        </h1>
        <div className="lg:row-span-2 space-y-10">
          <h2 className="text-base">{t('subtitle')}</h2>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 place-items-center text-xs gap-2">
            <div className="w-full">
              <Link href="#location">
                <Button
                  size="lg"
                  onClick={() =>
                    (window.location.href = `tel:${contact.phone}`)
                  }
                >
                  <span className="text-medium">{t('contact-us')}</span>
                </Button>
              </Link>
            </div>
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
