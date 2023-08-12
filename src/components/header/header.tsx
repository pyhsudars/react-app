import React from 'react'
import Banner from '../banner/banner'
import './header.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <Banner />
      <nav className='navbar navbar-expand-md navbar-dark bg-dark menu-border'>
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
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item mx-5 '>
              <Link className='nav-link' to='/upload-files'>
                Upload Battery Data
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
