import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import PLogo from '../../media/images/p-logo2.png';
import './style.css';


export default function Navbar() {
  const [navFixed, setNavFixed] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset > 200) {
      if (!navFixed) setNavFixed(true);
    } else
      setNavFixed(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
  })


  return (
    <div id={navFixed ? 'navbar-fixed' : 'navbar'}>
      <div className='navbar-container'>


        <Link to='/' className='navbar-logo'>
          <img src={PLogo} alt='Logo' />
          <h1>edro Felipe</h1>
        </Link>

        <div className='navbar-links'>
          <ul className='navbar-links-sections'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/about'>Sobre</Link>
            </li>
            <li>
              <a href="/#skills">Habilidade</a>
            </li>
            <li>
              <a href="/#projects">Projetos</a>
            </li>
            <li>
              <a href="/#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}