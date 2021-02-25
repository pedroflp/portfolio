import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';


import ProfileImg from '../../images/profile-image.png';

import './style.css';

export function Header() {
  return (
    <>
     <section id='header-mainpage'>
      <div className='header-mainpage-container'>
        <div className='header-mainpage-title'>
          <img src={ProfileImg} alt=""/>
          <h1>Olá! Me chamo <strong>Pedro Felipe</strong></h1>
            <h2>
              <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('sou ')
                typewriter.typeString('Desenvolvedor <strong>Front-End</strong>')
                .pauseFor(3000)
                .deleteAll()
                typewriter.typeString('e você está em meu <strong>Portfólio</strong>!')
                .pauseFor(5000)
                .start()
              }}
              options={{
                delay: 60,
                autoStart: true,
                loop: true,
                cursor: '|',
                wrapperClassName: 'header-mainpage-title-type-wraper',
              }}
            />
            </h2>
            
            <p>Atualmente desenvolvo utilizando tecnologias como <strong>HTML5, CSS3, JavaScript</strong> puros e <strong>ReactJs (+frameworks)</strong> para criação de aplicações web.</p>
        </div>
    

          <div className='header-buttons'>
            <a className='continuesee-button' href="/#habilities">Ver minhas habilidades</a>
            <Link to="/about" className='seemore-button'>Ver mais sobre mim!</Link>
          </div>

      </div>      
      </section>

    </>
  );
}