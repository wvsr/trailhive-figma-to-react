import React from 'react'
import Dell from '../assets/logos/dell.png'
import Lattice from '../assets/logos/lattice.png'
import Ncr from '../assets/logos/ncr.png'
import Rakuren from '../assets/logos/rakuren.png'
import Ted from '../assets/logos/ted.png'
import Zendesk from '../assets/logos/zendesk.png'
import PacificFund from '../assets/logos/pacific_fund.png'
function Testimonial() {
  return (
    <section className='rounded-[3rem] w-full py-14 px-2 testimonial text-primary container mx-auto max-w-screen-lg'>
      <h2 className='font-light mb-6'>TESTIMONIAL</h2>
      <div className='mb-20'>
        <p className='text-4xl font-bold max-w-4xl mb-3'>
          "TrailHive has completely changed the way I explore the outdoors. The
          personalized trail recommendations and virtual challenges have kept me
          motivated and engaged with my adventures."{' '}
        </p>
        <p className='text-xl font-bold'>- John R.</p>
      </div>

      <div>
        <p className='text-center mb-8 mt-5'>
          Trusted by teams at over 1,000 of the world’s leading organizations
        </p>
        <div className='flex justify-center flex-wrap gap-10'>
          <img src={Dell} alt='' />
          <img src={Lattice} alt='' />
          <img src={Ncr} alt='' />
          <img src={PacificFund} alt='' />
          <img src={Zendesk} alt='' />
          <img src={Rakuren} alt='' />
          <img src={Ted} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
