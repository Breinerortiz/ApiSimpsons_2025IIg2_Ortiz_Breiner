import React from 'react'
import './Header.css'
import familiaSimpsons from '../../assets/Familia_.png'
const Header = () => {
  return (
    <header>
       <img src={familiaSimpsons} alt="familia" id='image-title' />
      <h1 className='titulo'>The simpsons  </h1>
    </header>
  )
}

export default Header
