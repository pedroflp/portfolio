import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { useTheme } from '../../styles/themes/context'

import { FaRegSun, FaSun } from 'react-icons/fa';
import { RiMoonClearFill, RiMoonClearLine } from 'react-icons/ri';

import PLogo from '../../media/images/p-logo.png';
import './style.css';

export default function Navbar() {
  const { colors } = useContext(ThemeContext);
  const { defaultTheme, toggleTheme } = useTheme();

  return (
    <div id='navbar'>
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
            { defaultTheme.title === 'dark' ? <RiMoonClearFill /> : <RiMoonClearLine />}
            <Switch
              onChange={toggleTheme}
              checked={defaultTheme.title === 'light'}
              checkedIcon={true}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offHandleColor={colors.main}
              onHandleColor={colors.text}
              offColor={colors.background}
              onColor={colors.main}
            />
            { defaultTheme.title === 'light' ? <FaSun /> : <FaRegSun />}
          </div>
        </div>


      </div>
    </div>
  )
}