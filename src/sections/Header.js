import React from 'react'
import Logo from '../assets/logo.png'
function Header() {
  return (
    <header className='px-2 pt-1'>
      <div className='bg-primary rounded-[3rem] w-full flex justify-around items-center px-3 py-2.5'>
        <img src={Logo} alt='logo' />
        <nav>
          <ul className='flex gap-8 items-center'>
            <li>Feature</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className='btn-secondary'>Download the app</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
