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
import { ThemeProvider } from 'next-themes';
import { Josefin_Sans as JosefinSans } from 'next/font/google';

export { metadata };

const josefinSans = JosefinSans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

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
      className={josefinSans.variable}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <NextUIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
            >
              {children}
            </ThemeProvider>
          </NextUIProvider>
          <WhatsAppButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
