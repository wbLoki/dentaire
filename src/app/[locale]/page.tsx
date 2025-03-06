import Header from '@/src/components/Header';
import Hero from '@/src/components/index/Hero';

import Services from '@/src/components/index/Services';
import Reviews from '@/src/components/index/Reviews';
import Location from '@/src/components/index/Location';
import Footer from '@/src/components/Footer';
import Promises from '@/src/components/index/Promises';

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <main className="mx-auto">
        {/************ Hero section ************/}
        <section
          className="bg-[url('/media/bg.jpeg')] h-screen flex flex-col justify-end"
          id="hero"
        >
          <div className="absolute inset-0 w-2/3 bg-gradient-to-r from-black to-transparent"></div>
          <Hero />
        </section>
        <section
          id="services"
          className="bg-slate-100/40 flex justify-center"
        >
          <Services />
        </section>
        <section
          id="features"
          className="bg-mauve md:bg-slate-100/60 flex justify-center"
        >
          <Promises />
        </section>
        <section
          id="reviews"
          className="bg-blue md:bg-slate-100/40 flex justify-center"
        >
          <Reviews />
        </section>
        <section id="location">{/* <Location /> */}</section>
      </main>
    </>
  );
}
