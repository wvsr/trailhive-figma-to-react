import React from 'react'
import HeroImage from '../assets/hero.png'
function Hero() {
  return (
    <section className='container mx-auto max-w-screen-lg'>
      <div className='px-4 flex gap-8 py-14'>
        <div className='w-3/5'>
          <h1 className='text-7xl text-primary mt-6 mb-12 max-w-lg'>
            Your Ultimate Outdoor Companion
          </h1>
          <p className='text-primary mt-2 max-w-lg mb-8'>
            Are you tired of spending hours searching for the perfect hiking or
            biking trail? TrailHive - the ultimate outdoor adventure app that
            connects you with the best trails in your area.
          </p>
          <button className='btn-primary'>Download the appp</button>
        </div>
        <div className='w-3/6'>
          <img
            src={HeroImage}
            alt=''
            className='w-full h-auto hover:scale-95 transition-all duration-300'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
