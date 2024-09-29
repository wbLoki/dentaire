import React from 'react';

import Image from 'next/image';
import { useMessages, useTranslations } from 'next-intl';

type Props = {};

function Promises({}: Props) {
  const t = useTranslations('Promises');
  const messages = useMessages();
  let promises;
  if (typeof messages.Promises === 'object' && messages.Promises !== null) {
    promises = Object.values(messages.Promises.list);
  }
  const promisesArray = promises
    ?.map((promise) => {
      if (
        typeof promise === 'object' &&
        promise !== null &&
        'name' in promise &&
        'desc' in promise &&
        'img' in promise
      ) {
        return {
          name: promise.name,
          desc: promise.desc,
          img: promise.img,
        } as PromiseType;
      } else {
        return null;
      }
    })
    .filter(Boolean) as PromiseType[];
  return (
    <div className="max-w-5xl flex flex-col bg-mauve rounded-2xl p-4 md:p-6 lg:px-14 text-xs gap-8 lg:gap-16">
      <span className="uppercase text-purple text-xs -ml-4">{t('label')}</span>
      <h2 className="text-3xl pl-3 -ml-4">{t('title')}</h2>
      <div className="grid md:grid-cols-2 gap-4 lg:gap-16 lg:p-4">
        {promisesArray?.map((promise: PromiseType, index: number) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="flex bg-white/20 p-2 rounded-2xl aspect-square h-16">
              <div className="flex bg-white rounded-2xl p-4 aspect-square">
                <Image
                  src={promise.img}
                  width={40}
                  height={40}
                  alt="icon"
                  className="h-6 self-center"
                  color="blue"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-lg">{promise.name}</span>
              <span className="text-slate-700">{promise.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promises;
