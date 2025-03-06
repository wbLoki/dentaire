import React from 'react';

import { useMessages, useTranslations } from 'next-intl';
import { HiShieldCheck } from 'react-icons/hi2';
import { MdWorkspacePremium } from 'react-icons/md';
import { FaUserDoctor, FaMagnifyingGlassDollar } from 'react-icons/fa6';

type Props = {};

const iconMap = {
  HiShieldCheck,
  MdWorkspacePremium,
  FaUserDoctor,
  FaMagnifyingGlassDollar,
};

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
    <div className="max-w-5xl flex flex-col bg-background rounded-2xl p-4 md:p-6 lg:px-14 text-xs gap-8 lg:gap-16">
      <span className="uppercase text-xs -ml-4">{t('label')}</span>
      <h2 className="text-3xl pl-3 -ml-4">{t('title')}</h2>
      <div className="grid md:grid-cols-2 gap-4 lg:gap-16 lg:p-4">
        {promisesArray?.map((promise: PromiseType, index: number) => {
          const IconComponent = iconMap[promise.img];
          return (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="flex bg-foreground/20 p-2 rounded-2xl aspect-square h-16">
                <div className="flex bg-foreground justify-center rounded-2xl p-3 aspect-square overflow-hidden">
                  <IconComponent className="text-xl self-center text-primary" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-lg">{promise.name}</span>
                <span className="text-secondary">{promise.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Promises;
