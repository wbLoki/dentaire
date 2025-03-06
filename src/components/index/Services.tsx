import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { useMessages, useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Card from '../Card';

type Props = {};

function Services({}: Props) {
  const t = useTranslations('Services');
  const messages = useMessages();
  let services;
  if (typeof messages.Services === 'object' && messages.Services !== null) {
    services = Object.values(messages.Services.servicesList);
  }
  const servicesArray = services
    ?.map((service) => {
      if (
        typeof service === 'object' &&
        service !== null &&
        'name' in service &&
        'desc' in service &&
        'img' in service
      ) {
        return {
          name: service.name,
          desc: service.desc,
          img: service.img,
        } as BaseItem;
      } else {
        return null;
      }
    })
    .filter(Boolean) as BaseItem[];
  return (
    <div className="grid grid-row-4 text-foreground px-4 lg:px-8 text-xs gap-12 max-w-5xl">
      <span className="uppercase">{t('label')}</span>
      <h2 className="text-2xl lg:text-4xl lg:max-w-[70%]">{t('title')}</h2>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {servicesArray?.map((service, index: number) => (
          <Card
            key={index}
            img={service.img}
            name={service.name}
            desc={service.desc}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-8">
        <span
          style={{ textAlign: 'center' }}
          className="font-semibold capitalize text-2xl"
        >
          {t('subtitle')}
        </span>
        <p
          style={{ textAlign: 'center' }}
          className="text-sm"
        >
          {t('desc')}
        </p>
      </div>
    </div>
  );
}

export default Services;
