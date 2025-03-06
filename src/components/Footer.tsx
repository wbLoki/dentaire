'use client';
import React from 'react';
import { FiPhoneCall, FiClock } from 'react-icons/fi';
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { contact, hours, socialLinks } from '../constants';
import { Link } from '../i18n/routing';

type LinkProps = { title: string; href: string };

function Footer() {
  const t = useTranslations('Footer');
  const links: LinkProps[] = t.raw('links.list');
  return (
    <div className="py-8 bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto gap-14 text-xs text-slate-500">
        {/**************** CONTACT INFORMATION *****************/}
        <div className="flex flex-col gap-10">
          <h3 className="uppercase self-center text-slate-300">
            {t('contact-info')}
          </h3>
          <div className="grid grid-rows-3 gap-8 md:gap-6 self-center">
            <div className="flex items-center gap-4">
              <div className="flex bg-white/10 p-2 rounded-2xl aspect-square h-16">
                <div className="flex bg-white rounded-xl p-3 aspect-square justify-center h-12">
                  <FiPhoneCall className="text-xl self-center fill-black text-black" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-300 capitalize">{t('phone')}</span>
                <span className="text-white text-sm">
                  {contact.phone.replace(/(\d{2})/g, '$1 ').trim()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-white/10 p-2 rounded-2xl aspect-square h-16">
                <div className="flex bg-white rounded-xl p-2 aspect-square justify-center h-12">
                  <FiClock className="text-2xl self-center fill-black text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-300 capitalize">{t('hours')}</span>
                <div className="flex flex-col">
                  <span className="text-white text-sm">{hours.start}</span>
                  <span className="text-white text-sm">{hours.end}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-white/10 p-2 rounded-2xl aspect-square h-16">
                <div className="flex bg-white rounded-xl p-3 aspect-square justify-center h-12">
                  <FaMapMarkerAlt className="text-2xl self-center fill-black text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-300 capitalize">
                  {t('address')}
                </span>
                <span className="text-white text-sm capitalize">
                  {t('clinic-address')}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/**************** QUICK LINKS *****************/}
        <div className="flex flex-col gap-10">
          <h3 className="uppercase self-center text-slate-300">
            {t('links.title')}
          </h3>
          <div className="flex flex-col gap-8 md:gap-4 capitalize text-white text-sm items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-8 items-center">
            <h3 className="uppercase self-center text-slate-300">
              {t('follow')}
            </h3>
            <div className="flex gap-4">
              <Link
                target="_blank"
                href={socialLinks.instagram}
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-2xl" />
              </Link>
              <Link
                target="_blank"
                href={socialLinks.facebook}
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white text-2xl" />
              </Link>
              <Link href={socialLinks.tiktok}>
                <FaTiktok className="text-white text-2xl" />
              </Link>
              <Link href={socialLinks.maps}>
                <FaMapMarkerAlt className="text-white text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
