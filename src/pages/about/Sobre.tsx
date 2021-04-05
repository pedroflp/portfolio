import React from 'react';

import { TiUserOutline } from 'react-icons/ti';
import { BiCodeAlt } from 'react-icons/bi';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import SobreInfo from '../../components/sobre/SobreInfo';
import BackTop from '../../components/backtop/BackTop';

import ProfileImg from '../../media/images/profile-image.png';
import './style/sobre.css';
import BackHome from '../../components/backtohome/BackHome';


function Sobre() {
  return (
    <>

    <Navbar />
    <section id='sobre'>
      <div className='sobre-container'>

        <div className='sobre-card'>

          <div className='sobre-card-images'>
            <img src={ProfileImg} className='sobre-card-image image-1' alt='Profile' />
          </div>
          <div className='sobre-card-title'>
            <h1>Um pouco sobre<strong> quem sou eu</strong></h1>
          </div>
          <div className='sobre-card-information'>
            
            <TiUserOutline className='sobre-card-personicon' size={60} />
            <SobreInfo text='Oi, como você já sabe, me chamo Pedro, nasci em 2001. Sou graduando do curso de Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte em Natal - Rio Grande do Norte. Nasci em Mossoró, mas atualmente estou morando em Natal.' />
            
            <BiCodeAlt className='sobre-card-personicon' size={60} />
            <SobreInfo text='Comecei a programar com 17 anos criando coisas em python, até que resolvi criar algo que precisava de uma interface bonita, foi quando aprendi HTML, CSS e peguei o gancho para aprender JavaScript, jQuery e Electron, pois o que eu queria era criar um aplicativo desktop (para computadores). Foquei bastante em desenvolvimento front-end (parte visual das aplicações) ao longo do tempo, mas hoje consigo construir uma aplicaçao completa utilizando tecnologias como as listadas na seção Habilidades. Participei de alguns treinamentos seletivos de empresas juniores e bolsistas, trabalhando em grupo com outros desenvolvedores e sempre caminhando em busca do próximo nível.  Atualmente estou aprofudando meus estudos em React e frameworks/bibliotecas para criar aplicações web e mobile.' />          

          </div>
          
          <BackHome />

        </div>
      </div>
    </section>

    <Footer />

    <BackTop />

    </>
  )
}

export default Sobre;
