import React from 'react';

import PLogo from '../../images/p-logo.png';
import './style.css';


function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer-left-info'>
          <img src={PLogo} alt='Logo' />
          <p> Desenvolvido por <br/> Pedro Felipe © {new Date().getFullYear()}</p>
        </div>
          <p><strong>Boost yourself!</strong></p>
      </div>
    </footer>
  )
}

export default Footer;