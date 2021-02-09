import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import PLogo from '../../images/p-logo.png';
import './style.css';




function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer-left-info'>
          <img src={PLogo} alt='Logo' />
          <p> Desenvolvido por <br/> Pedro Felipe © 2020</p>
        </div>
          <p><strong>Boost yourself!</strong></p>
      </div>
    </footer>
  )
}

export default Footer;