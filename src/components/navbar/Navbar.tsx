import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { useTheme } from '../../styles/themes/ThemeContext'

import { FaSun } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';

import PLogo from '../../media/images/p-logo2.png';
import './style.css';


export default function Navbar() {
  const { colors } = useContext(ThemeContext);
  const { defaultTheme, toggleTheme } = useTheme();

  const [navFixed, setNavFixed] = useState(false);
  
  const checkScroll = () => {
    if (window.pageYOffset > 600){
      setNavFixed(true);
    } else
    setNavFixed(false);
  }
  window.addEventListener('scroll', checkScroll);

  return (
    <div id={ navFixed ? 'navbar-fixed' : 'navbar'}>
      <div className='navbar-container'>


        <Link to='/' className='navbar-logo'>
            <img src={PLogo} alt='Logo'/>
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
          <div className='theme-switcher'>
            { defaultTheme.title === 'dark' && <RiMoonClearFill style={{marginLeft: 20}} className='theme-switcher-icon' />}
            <Switch
              onChange={toggleTheme}
              checked={defaultTheme.title === 'light'}
              checkedIcon={true}
              uncheckedIcon={false}
              handleDiameter={20}
              height={25}
              width={50}
              offHandleColor={colors.main}
              onHandleColor={colors.text}
              offColor={colors.background}
              onColor={colors.main}
            />
            { defaultTheme.title === 'light' && <FaSun style={{marginLeft: -20}} className='theme-switcher-icon' />}
          </div>
        </div>


      </div>
    </div>
  )
}