import React from 'react'

function SecondTestomonial() {
  return (
    <section className='rounded-[3rem] w-full py-28 px-2 second-testomial text-primary '>
      <div className='container mx-auto max-w-screen-lg'>
        <h2 className='mb-6 font-medium'>Testimonial</h2>
        <div>
          <p className='text-4xl font-bold max-w-4xl mb-3 text-primary'>
            "I love the social networking aspect of TrailHive. It's great to
            connect with other hikers and bikers and plan group events
            together."
          </p>
          <p className='text-xl font-bold mt-2'>- John R.</p>
        </div>
        <button className='btn-primary mt-10'>Learn more</button>
      </div>
    </section>
  )
}

export default SecondTestomonial
