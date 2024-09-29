import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const keywords =
  'cabinet, dentaire, tanger, dentiste, dentist, implant dentaire, طبيب أسنان طنجة, طبيب أسنان بوخالف, احسن طبيب أسنان طنجة, أرقام هواتف أطباء الأسنان طنجة, dentist tanger, dentiste tanger';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dr Majd Zade</title>
        <meta
          name="description"
          content="Cabinet Dentaire Ennasr de Tanger. Prenez un rendez-vous avec l'un des meilleurs médecins dès maintenant."
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          key="icon"
          rel="icon"
          href="/logo.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
