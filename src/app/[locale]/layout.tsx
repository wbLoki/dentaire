import type { Metadata } from 'next'
import '../../styles/globals.css'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {NextUIProvider} from "@nextui-org/react";

const keywords = "cabinet, dentaire, tanger, dentiste, dentist, implant dentaire, طبيب أسنان طنجة, طبيب أسنان بوخالف, احسن طبيب أسنان طنجة, أرقام هواتف أطباء الأسنان طنجة, dentist tanger, dentiste tanger";
export const metadata: Metadata = {
    title: 'Cabinet Dentaire Ennasr',
    description: "Cabinet Dentaire Ennasr de Tanger. Prenez un rendez-vous avec l'un des meilleurs médecins dès maintenant.",
    keywords: keywords,
    icons: {
        icon: "/logo.jpg",
    },
  }
export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <NextUIProvider>
              {children}
            </NextUIProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }