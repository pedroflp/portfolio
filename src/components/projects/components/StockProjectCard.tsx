import React from 'react';
import { FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';

export default function StockProjectCard(){
  return (
    <div className='stockapp-card'>
      <FiPackage className='package-icon' size={300} />
      <div className='stockapp-content'>
        <div className='stockapp-title'>
          <h1>StockApp - Web & API</h1>
          <p>Uma dashboard com api própria para controlar a quantidade e preços dos produtos de seu estoque.</p>
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
          <div className='stockapp-github-buttons'>
            <a href='https://github.com/pedroflp/stock-app-web' target='_blank' rel="noopener noreferrer"><FaGithub size={22} /> StockApp Web</a>
            <a href='https://github.com/pedroflp/stock-app-api' target='_blank' rel="noopener noreferrer"><FaGithub size={22} /> StockApp API</a>
          </div>
        </div>
      </div>
    </div>
  );
}
