import React from 'react'
import Logo from '../assets/white_logo.png'
function Footer() {
  return (
    <footer className='text-primary container mx-auto py-14 px-3'>
      <div className='grid grid-cols-4'>
        <div>
          <img src={Logo} alt='' />
        </div>
        <div>
          <p className='text-xl mb-4'>App</p>
          <ul>
            <li>Features</li>
            <li>Benefits</li>
            <li>Pricing</li>
            <li>Explore</li>
            <li>Trails</li>
          </ul>
        </div>
        <div>
          <p className='text-xl mb-4'>Company</p>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Support</li>
            <li>Members</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className='flex gap-10 text-sm py-6 border-t border-primary mt-12'>
          <li>© 2023 TrailHive. All rights reserved.</li>
          <li>Privacy policy</li>
          <li>Terms or Services</li>
          <li>Cokies and service</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
