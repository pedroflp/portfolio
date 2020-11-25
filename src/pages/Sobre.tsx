import React from 'react';
import ReactTooltip from 'react-tooltip';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import ProfileImg from '../images/profile-image.png';
import './styles/sobre.css';

import { FiUser, FiHeadphones, FiArrowLeft } from 'react-icons/fi';
import { HiOutlineCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SobreInfo from '../components/sobre/SobreInfo';

function Sobre() {
  return (
    <>

    <Navbar />
    <ReactTooltip backgroundColor='#04D361' textColor='rgb(32, 31, 36)' place='top' />

    <section id='sobre'>
      <div className='sobre-container'>

        <div className='sobre-card'>

          <div className='sobre-card-images'>
            <img src={ProfileImg} className='sobre-card-image image-1' alt='Profile Image' />
          </div>
          <div className='sobre-card-title'>
            <h1>Um pouco sobre<strong> quem sou eu</strong></h1>
          </div>
          <div className='sobre-card-information'>
            
            <FiUser className='sobre-card-personicon' size={60} color='#04D361' />
            <SobreInfo text='Oi, como você já sabe, me chamo Pedro, sou graduando do curso de Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte em Natal - Rio Grande do Norte. Nasci em Mossoró, mas atualmente estou morando em Natal.' />
            
            <HiOutlineCode className='sobre-card-personicon' size={60} color='#04D361' />
            <SobreInfo text='Comecei a programar com 17 anos criando coisas em python, até que resolvi criar algo que precisava de uma interface bonita, foi quando aprendi HTML, CSS e peguei o gancho para aprender JavaScript, jQuery e Electron, pois o que eu queria era criar um aplicativo desktop (para computadores). Foquei bastante em desenvolvimento front-end (parte visual das aplicações) ao longo do tempo, mas hoje consigo construir uma aplicaçao completa utilizando tecnologias como as listadas na seção Habilidades. Atualmente estou estudando React Native para construção de aplicações mobile.' />          

<!--             <FiHeadphones className='sobre-card-personicon' size={60} color='#04D361' />
            <SobreInfo text='Gosto bastante de jogos eletrônicos, sendo um dos meus favoritos o Sea Of Thieves. Tenho um leque grande de gosto musical mas meus estilos favoritos são eletrônica e rap.' />  
 -->
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
