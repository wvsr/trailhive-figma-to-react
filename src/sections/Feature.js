import React from 'react'
import FirstImage from '../assets/feature/1.png'
import SecondImage from '../assets/feature/2.png'
import ThirdImage from '../assets/feature/3.png'

function Feature() {
  return (
    <section className='rounded-[3rem] w-full py-14 px-2 bg-primary text-secondary'>
      <div className='container mx-auto max-w-screen-lg flex'>
        <section className='w-2/5'>
          <h4 className='text-lg font-light mb-8'>Features</h4>
          <p className='text-3xl mb-4 font-bold'>
            Stay Active <br /> and Healthy
          </p>
          <button className='btn-secondary'>Learn more</button>
        </section>
        <div className='grid grid-cols-3 gap-10'>
          <div>
            <img
              src={FirstImage}
              className='mb-4 hover:scale-[0.98] transition-all duration-200'
              alt=''
            />
            <h3 className='mb-4 font-md text-lg'>Access nature</h3>
            <p className='max-w-sm'>
              With TrailHive, you'll have access to a comprehensive database of
              trails, complete with detailed information on ratings, difficulty
              levels, and user reviews.{' '}
            </p>
          </div>
          <div>
            <img
              src={SecondImage}
              className='mb-4 hover:scale-[0.98] transition-all duration-200'
              alt=''
            />
            <h3 className='mb-4 font-md text-lg'>Access nature</h3>
            <p className='max-w-sm'>
              With TrailHive, you'll have access to a comprehensive database of
              trails, complete with detailed information on ratings, difficulty
              levels, and user reviews.{' '}
            </p>
          </div>
          <div>
            <img
              src={ThirdImage}
              className='mb-4 hover:scale-[0.98] transition-all duration-200'
              alt=''
            />
            <h3 className='mb-4 font-md text-lg'>Access nature</h3>
            <p className='max-w-sm'>
              With TrailHive, you'll have access to a comprehensive database of
              trails, complete with detailed information on ratings, difficulty
              levels, and user reviews.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
