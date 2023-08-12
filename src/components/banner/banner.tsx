import React from 'react'
import './banner.scss'
import MercedesLogo from '../../assets/images/mercedes_logo.svg'

const Banner: React.FC = () => {
  return (
    <>
      <div className='p-3 branding'>
        <span className='logo-txt'>
          <img className='logo' src={MercedesLogo} alt='Mercedes Logo' />
          <h1 className='text-white h3-text'>oneSCM</h1>
        </span>
      </div>
    </>
  )
}

export default Banner
