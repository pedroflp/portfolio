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
              <SobreInfo text={
                <p>
                  Comecei a programar em Julho de 2019, ajudando um amigo a fazer um site pessoal (criando e aprendendo em paralelo).
                  <strong> Dali pra frente foi sensacional sentir que eu poderia ajudar e resolver vários problemas ao meu redor, utilizando algumas linhas de código. </strong> <br />
                  Em 2020, foquei bastante em desenvolvimento front-end (parte visual das aplicações) de forma moderna, estudando novas formas de construir as soluções.
                  Hoje trabalho com o Javascript e para desenvolvimento de interfaces uso ReactJS, React Native e outros.
                  <br /><br />
                  Participei de alguns treinamentos seletivos de empresas juniores e bolsistas da faculdade e
                  no último ano (2021-2022) trabalhei como desenvolvedor web e mobile front-end em uma empresa cujo foco era descomplicar o gerenciamento comercial para grandes players do varejo nacional, como Hering.
                  Além disso, estou sempre estudando e compartilhando conhecimento para buscar crescer e ir para o próximo nível.
                </p>
              }
              />

            </div>

            <BackHome />

          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre;
