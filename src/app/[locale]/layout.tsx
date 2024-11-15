import '../../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { NextUIProvider } from '@nextui-org/react';
import WhatsAppButton from '@/src/components/FloatingWhatsapp';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import metadata from '@/src/config/metadata';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export { metadata };

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      dir={locale == 'ar' ? 'rtl' : 'ltr'}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <NextUIProvider>{children}</NextUIProvider>
          <WhatsAppButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
