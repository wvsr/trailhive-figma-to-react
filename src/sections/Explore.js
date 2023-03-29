import React from 'react'
import ExploreImage from '../assets/explore.png'
function Explore() {
  return (
    <section className='rounded-[3rem] w-full pt-24 pb-6 px-2 bg-primary text-secondary'>
      <div className='container mx-auto max-w-screen-xl'>
        <div className='flex justify-center items-center mb-10'>
          <p className='text-3xl font-semibold text-center max-w-lg'>
            Find new trails to explore and adventures to embark on.
          </p>
        </div>
        <img
          src={ExploreImage}
          className='w-full hover:scale-[0.99] duration-300 transition-all'
        />
      </div>
    </section>
  )
}

export default Explore
