import React from 'react'
import Banner from '../banner/banner'

const Header: React.FC = () => {
  return (
    <header>
      <Banner />
      <nav
        className='navbar navbar-expand-md navbar-dark bg-dark'
        style={{ borderTop: '.25px solid #A4AAAE' }}
      >
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mx-5 mr-auto'>
            <li className='nav-item mx-5 active'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item mx-5 '>
              <a className='nav-link' href='/'>
                Upload Battery Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
