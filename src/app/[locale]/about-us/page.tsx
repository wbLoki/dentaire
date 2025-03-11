'use client';
import EmblaCarousel from '../../../components/carousel';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

type Props = {};

function page({}: Props) {
  const t = useTranslations('AboutUs');
  const messages = useMessages();
  const OPTIONS = { loop: true };
  let slides;
  if (typeof messages.AboutUs === 'object' && messages.AboutUs !== null) {
    slides = Object.values(messages.AboutUs.centerImages);
  }
  const slidesArray = slides
    ?.map((slide) => {
      if (
        typeof slide === 'object' &&
        slide !== null &&
        'src' in slide &&
        'alt' in slide
      ) {
        return {
          src: slide.src,
          alt: slide.alt,
        } as Slide;
      } else {
        return null;
      }
    })
    .filter(Boolean) as Slide[];
  console.log('slides:', slides);
  console.log('t:', t('centerImages.0'));
  return (
    <main className="m-auto text-sm flex flex-col gap-16 lg:gap-24 items-center p-2 xl:p-16 overflow-hidden min-h-screen bg-primary">
      <h1 className="text-4xl pb-2 pt-28 lg:text-6xl lg:pt-36">{t('title')}</h1>
      <section
        id="Doctor intro"
        className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 max-w-5xl m-auto"
      >
        <div>
          <Image
            src={t('doctor-img')}
            alt="doctor"
            width={1400}
            height={300}
            className="rounded-xl object-contain"
          />
        </div>
        <div className="bg-card p-4 rounded-lg">
          <h2 className="font-bold text-3xl py-8">{t('doctor-name')}</h2>
          <p>{t('doctor-desc')}</p>
        </div>
      </section>
      <section
        id="Team intro"
        className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 max-w-5xl m-auto"
      >
        <div className="lg:order-last content-center">
          <Image
            src={t('team-img')}
            alt="doctor"
            width={1400}
            height={300}
            className="rounded-xl object-contain"
          />
        </div>
        <div className="bg-card p-4 rounded-lg">
          <h2 className="font-bold text-3xl py-8">{t('team-name')}</h2>
          <p>{t('team-desc')}</p>
        </div>
      </section>
      <section
        id="Center images"
        className=" max-w-5xl m-auto"
      >
        <EmblaCarousel
          slides={slidesArray}
          options={OPTIONS}
        />
      </section>
    </main>
  );
}

export default page;
