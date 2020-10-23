import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

import PLogo from '../../images/p-logo.png';
import './style.css';


const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer-left-info'>
          <img src={PLogo} alt='Logo' />
          <p> Desenvolvido por <br/> Pedro Felipe © 2020 </p>
          <p><strong>Boost yourself!</strong></p>
        </div>
        <a onClick={scrollTop} data-tip='Voltar para o topo'><FiArrowUp size={20} /></a>
      </div>
    </footer>
  )
}

export default Footer;