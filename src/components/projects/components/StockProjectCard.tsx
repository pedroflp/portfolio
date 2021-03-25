import React, { useState } from 'react';

import { FaGithub, FaInfoCircle, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { GoAlert } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';

export default function StockProjectCard(){
  const [isVisible, setIsVisible] = useState(false);

  function handleHover() {
    setIsVisible(true);
  } 

  function handleUnhover() {
    setIsVisible(false)
  }

  return (
    <div className='stockapp-card'>
      <FiPackage className='package-icon' size={300} />
      <div className='stockapp-content'>
        <div className='stockapp-top-content'>
          <div className='stockapp-title'>
            <h1>StockApp - Web & API</h1>
            <p>Uma dashboard com api própria para controlar a quantidade e preços dos produtos de seu estoque.</p>
          </div>
          <div>
            <FaReact size={80} />
            <FaNodeJs size={80} />
          </div>
        </div>

      <div className='stockapp-tecnologies'>
        <div className='stockapp-web-info'>
            <span>Front-End:</span>
            <div className='stockapp-info-tecnologies'>
              <p className='reactjs'><FaReact size={15} /> ReactJS</p>
              <p className='typescript'>Typescript</p>
            </div>
          </div>

          <div className='stockapp-api-info'>
            <span>Back-End:</span>
            <div className='stockapp-info-tecnologies'>
              <p className='nodejs'><FaNodeJs size={15} /> Node.js</p>
              <p className='typescript'>Typescript</p>
              <p className='expressjs'>Expressjs</p>
              <p className='sqlite'>SQLite</p>
            </div>
          </div>
      </div>

      <div className='line-divisor'/>

        <div className='stockapp-buttons'>
          <a href='https://stock.pedroflp.vercel.app' target="_blank" rel="noopener noreferrer"><FiPackage size={22} />Acessar Dashboard</a>

          <FaInfoCircle 
          size={20}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            left: 0,
            marginTop: '15px',
            marginLeft: '13rem'
          }} 
          onMouseOver={handleHover}
          onMouseOut={handleUnhover}
          />

          { isVisible && (
            <div className='card-popup'>
              <div className='card-popup-arrow-left'></div>
              <p>Você pode acessar a dashboard utilizando a conta teste!</p>
              <br/>
              <p><span>Login:</span> test</p>
              <p><span>Password:</span> test</p>
            </div>
          ) }
          <div className='stockapp-github-buttons'>
            <a href='https://github.com/pedroflp/stock-app-web' target='_blank' rel="noopener noreferrer"><FaGithub size={22} /> StockApp Web</a>
            <a href='https://github.com/pedroflp/stock-app-api' target='_blank' rel="noopener noreferrer"><FaGithub size={22} /> StockApp API</a>
          </div>
        </div>
      </div>
    </div>
  );
}
