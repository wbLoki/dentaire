'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../media/logo.jpg';
import { contact } from '../constants';

const WhatsAppButton = () => {
  const t = useTranslations('Whatsapp');
  return (
    <FloatingWhatsApp
      phoneNumber={contact.whatsapp} // Your WhatsApp number with country code
      accountName={t('name')} // Your name or business name
      statusMessage={t('statusMessage')} // Status message
      chatMessage={t('chatMessage')} // Default message when the chat opens
      placeholder={t('placeholder')}
      avatar="/logo.jpg"
    />
  );
};

export default WhatsAppButton;
