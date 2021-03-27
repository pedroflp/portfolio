import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import ProfileImg from '../../media/images/profile-image.png';

import './style.css';

export function Header() {
  return (
    <>
     <section id='header-mainpage'>
      <div className='header-mainpage-container'>
        <div className='header-mainpage-title'>
          <img src={ProfileImg} alt=""/>
          <h1>Olá! Me chamo <strong>Pedro Felipe</strong>,</h1>
            <h2>
              <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('sou ')
                typewriter.typeString('Desenvolvedor <strong>Web Front-End</strong>...')
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
            
            <p>Atualmente desenvolvo utilizando tecnologias como <strong>HTML5, CSS3, JavaScript</strong> puros, <strong>ReactJS (+frameworks)</strong> e <strong>Nodejs</strong> para criação de aplicações web.</p>
        </div>
    

          <div className='header-buttons'>
            <a className='continuesee-button' href="/#projects">Ver meus projetos</a>
            <Link to="/about" className='seemore-button'>Ver mais sobre mim</Link>
          </div>

      </div>      
      </section>

    </>
  );
}