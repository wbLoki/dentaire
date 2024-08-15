import Header from '@/src/components/Header'
import Hero from '@/src/components/index/Hero'

import Services from '@/src/components/index/Services'
import Features from '@/src/components/index/Features'
import Reviews from '@/src/components/index/Reviews'
import Location from '@/src/components/index/Location'
import Footer from '@/src/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='max-w-screen-2xl md:px-4 mx-auto'>
        {/************ Hero section ************/}
        <section id="hero">
          <Hero />
        </section>
        <section id="services" className='bg-slate-100/40'>
          <Services />
        </section>
        <section id="features" className='bg-mauve md:bg-transparent'>
          <Features />
        </section>
        <section id="reviews" className='bg-blue md:bg-transparent'>
          <Reviews />
        </section>
        <section id="location">
          {/* <Location /> */}
        </section>
      </main>
      <Footer />
    </>
  )
}
