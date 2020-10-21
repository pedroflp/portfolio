import React from 'react';

import './style.css';

export default function() {
  return (
    <div id='navbar'>
      <div className='navbar-container'>
        <h1>Pedro</h1>
        <ul className='navbar-links'>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Sobre</a>
          </li>

          <li>
            <a href="">Habilidade</a>
          </li>

          <li>
            <a href="">Projetos</a>
          </li>


          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  )
}