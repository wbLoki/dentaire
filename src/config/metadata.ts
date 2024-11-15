// /src/config/metadata.ts
import type { Metadata } from 'next';

const keywords =
  'cabinet, dentaire, tanger, dentiste, dentist, implant dentaire, طبيب أسنان طنجة, طبيب أسنان بوخالف, احسن طبيب أسنان طنجة, أرقام هواتف أطباء الأسنان طنجة, dentist tanger, dentiste tanger';

const metadata: Metadata = {
  title: 'Cabinet Dentaire Ennasr',
  description:
    "Cabinet Dentaire Ennasr de Tanger. Prenez un rendez-vous avec l'un des meilleurs médecins dès maintenant.",
  keywords: keywords,
  icons: {
    icon: '/logo.jpg',
  },
  openGraph: {
    title: 'Cabinet Dentaire Ennasr',
    description:
      "Cabinet Dentaire Ennasr de Tanger. Prenez un rendez-vous avec l'un des meilleurs médecins dès maintenant.",
    images: [
      {
        url: '/og-image.jpg', // Replace with your actual preview image path
        width: 1200,
        height: 630,
        alt: 'Cabinet Dentaire Ennasr',
      },
    ],
    url: 'https://your-website-url.com', // Replace with your website URL
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Dentaire Ennasr',
    description:
      "Cabinet Dentaire Ennasr de Tanger. Prenez un rendez-vous avec l'un des meilleurs médecins dès maintenant.",
    images: ['/og-image.jpg'], // Replace with your preview image path
  },
};

export default metadata;
