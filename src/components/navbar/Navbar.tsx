import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

import PLogo from '../../media/images/p-logo.png';
import './style.css';

export default function() {
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
          <ul className='navbar-links-social'>
            <a href='https://github.com/pedroflp' target='_blank' rel='noopener noreferrer'>
              <AiFillGithub className='github icon' size={17} />
            </a>
            <a href='https://www.linkedin.com/in/pedroflp' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='linkedin icon' size={17} />
            </a>
            <a href='https://instagram.com/_pedroflp' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='instagram icon' size={17} />
            </a>
            <a href='mailto: pedrofelipe0940@gmail.com' target='_blank' rel='noopener noreferrer'>
              <SiGmail className='email icon' size={17} />
            </a>
          </ul>
        </div>

      </div>
    </div>
  )
}