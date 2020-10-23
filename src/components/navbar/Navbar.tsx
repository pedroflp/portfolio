import React from 'react';
import { Link } from 'react-router-dom';

import PLogo from '../../images/p-logo.png';
import './style.css';

const scrollHabilities = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

export default function() {
  return (
    <div id='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={PLogo} />
          <h1>edro Felipe</h1>
        </div>
        <ul className='navbar-links'>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to='/sobre'>Sobre</Link>
          </li>

          <li>
            <a href="/#habilities">Habilidade</a>
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
  )
}