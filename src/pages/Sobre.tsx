import React from 'react';
import ReactTooltip from 'react-tooltip';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import ProfileImg from '../images/profile-image.png';
import './styles/sobre.css';

import { FiUser, FiHeadphones, FiArrowLeft } from 'react-icons/fi';
import { HiOutlineCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <>

    <Navbar />
    <ReactTooltip backgroundColor='#04D361' textColor='rgb(32, 31, 36)' place='top' />

    <section id='sobre'>
      <div className='sobre-container'>

        <div className='sobre-card'>

          <div className='sobre-card-images'>
            <img src={ProfileImg} className='sobre-card-image image-1' />
          </div>
          <div className='sobre-card-title'>
            <h1>Um pouco sobre<strong> quem sou eu</strong></h1>
          </div>
          <div className='sobre-card-information'>
            <FiUser className='sobre-card-personicon' size={60} color='#04D361' />
            <p>Oi, como você já sabe, me chamo <strong>Pedro</strong>, sou graduando do curso de Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte em Natal - Rio Grande do Norte. Nasci em Mossoró, mas atualmente estou morando em Natal.</p>

            <FiHeadphones className='sobre-card-personicon' size={60} color='#04D361' />
            <p>Gosto bastante de jogos eletrônicos, sendo um dos meus favoritos o <strong>Sea Of Thieves</strong>. Tenho um leque grande de gosto musical mas meus estilos favoritos são <strong>eletrônica e rap</strong>.</p>

            <HiOutlineCode className='sobre-card-personicon' size={60} color='#04D361' />
            <p>Comecei a programar com 17 anos criando coisas em python, até que resolvi criar algo que precisava de uma interface bonita, foi quando aprendi <strong>HTML, CSS</strong> e peguei o gancho para aprender <strong>JavaScript, jQuery e Electron</strong>, pois o que eu queria era buildar um app desktop.
            <br/>
            Foquei bastante em desenvolvimento front-end ao longo do tempo, mas hoje consigo construir uma aplicaçao full utilizando essas <strong data-tip='HTML5, CSS3, JavaScript/jQuery, ReactJs, Nodejs, Django'><a>tecnologias</a></strong>. Atualmente estou estudando <strong>React Native</strong> para construção de aplicações mobile.</p>
          </div>

          <Link to='/' className='backhome-button'>
            <FiArrowLeft size={20} />  
            Voltar para Home
          </Link>
        </div>
      </div>
    </section>

    <Footer />

    </>
  )
}

export default Sobre;