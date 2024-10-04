import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { useMessages, useTranslations, useLocale } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import Card from '../Card';

type Props = {};

function Services({}: Props) {
  const t = useTranslations('Services');
  const messages = useMessages();
  const locale = useLocale();
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
        } as Service;
      } else {
        return null;
      }
    })
    .filter(Boolean) as Service[];
  return (
    <>
      <div className="grid grid-row-4 px-4 lg:px-8 text-xs gap-8 max-w-5xl">
        <span className="text-primary uppercase">{t('label')}</span>
        <h2 className="text-2xl lg:text-4xl lg:max-w-[70%]">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {servicesArray?.map((service, index: number) => (
            // <div
            //   key={index}
            //   className="flex flex-col rounded-3xl border p-3 gap-3 flex-shrink"
            // >
            //   <div
            //     className={`flex p-4 bg-slate-300 rounded-2xl aspect-square w-full justify-center items-center`}
            //   >
            //     <div className="bg-white/25 p-3 rounded-3xl border-t border-l border-white/50">
            //       <div className="bg-white p-4 rounded-2xl w-fit mx-auto">
            //         <Image
            //           src={service.img}
            //           alt="icon"
            //           width={32}
            //           height={32}
            //           className="text-red-600 h-8 w-auto"
            //         />
            //       </div>
            //     </div>
            //   </div>
            //   <span className="text-lg flex-grow text-center">
            //     {service.name}
            //   </span>
            //   <span className="text-slate-500 self-center text-center">
            //     {service.desc}
            //   </span>
            // </div>
            <Card
              key={index}
              img={service.img}
              name={service.name}
              desc={service.desc}
              type={1}
            />
          ))}
        </div>
        <Link
          className="bg-primary/10 rounded-2xl w-56 p-2 justify-self-center"
          href={'/services'}
        >
          <div className="flex p-2 text-primary items-center justify-center gap-2">
            <span>{t('see-more')}</span>
            <div className="p-0.5 bg-primary rounded-full">
              <FiChevronRight
                className={`text-white h-4 w-auto ${locale == 'ar' && 'rotate-180'}`}
              />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <span className="bg-rose sr-only"></span>
        <span className="bg-peach sr-only"></span>
      </div>
    </>
  );
}

export default Services;
