import React from 'react';
import ReactTooltip from 'react-tooltip';

import { BsEject } from 'react-icons/bs';
import { RiTShirt2Line } from 'react-icons/ri';
import { FiMusic } from 'react-icons/fi';
import { FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub, AiFillChrome } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiDjango } from 'react-icons/si';

import Navbar from '../components/navbar/Navbar';
import ProfileImg from '../images/profile-image.png';

import './styles/mainpage.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return(
    <>

    <Navbar />
    <ReactTooltip backgroundColor='#04D361' textColor='rgb(32, 31, 36)' place='bottom' />
    
    <section id='header-mainpage'>
      <div className='header-mainpage-container'>
        <div className='header-mainpage-information-card'>
          <img src={ProfileImg} />
          
          <h1>Olá me chamo <strong>Pedro Felipe</strong> e você está em meu Portfólio!</h1>
          <p>Atualmente sou desenvolvedor web e utilizo tecnologias como <strong>HTML5, CSS3, JavaScript</strong> para desenvolver aplicações front-end.</p>

          <a href="" className='seemore-button'>Ver mais sobre!</a>
        </div>
      </div>
    </section>

    <section id='habilities'>
      <div className='habilities-container'>
        <div className='habilities-title'>
          <h1>Minhas <strong>Habilidades</strong>.</h1>
          <p>Ao lado estão as <strong>tecnologias e frameworks</strong> que possuo habilidades e conhecimentos.</p>
        </div>

        <div className='habilities-cards'>
          <div className='html habilities-card' data-tip='HTML5'>
            <AiFillHtml5 className='html-icon' size={50} />
          </div>
          <div className='css habilities-card' data-tip='CSS3'>
            <DiCss3 className='css-icon' size={50} />
          </div>
          <div className='js habilities-card' data-tip='JavaScript'>
            <SiJavascript className='js-icon' size={50} />
          </div>
          <div className='reactjs habilities-card' data-tip='ReactJs'>
            <SiReact className='reactjs-icon' size={50} />
          </div>
          <div className='nodejs habilities-card' data-tip='NodeJs'>
            <FaNodeJs className='nodejs-icon' size={50} />
          </div>
          <div className='django habilities-card' data-tip='Django'>
            <SiDjango className='django-icon' size={50} />
          </div>
        </div>
      </div>
    </section>

    <section id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>Meus <strong>Projetos</strong>.</h1>
          <p>Abaixo estão alguns <strong>projetos</strong> que desenvolvi para <strong>estudos</strong> e para <strong>clientes</strong>.</p>
        </div>

          <div id='projects-cards'>         
            <div className='tieri-beats projects-card'>
              <div className='projects-card-title'>
                <FiMusic className='projects-card-icon' size={80} />
                <h1><strong>Tieri Beats</strong></h1>
                <p>Site criado para um cliente <strong>produtor musical</strong> com finalidade de mostrar e vender seu produto.</p>
              </div>

              <div className='projects-card-languages'>
                <span>Linguagens utilizadas:</span>
                <div className='projects-card-languages-icons'>
                  <AiFillHtml5 className='html-icon' size={22} />
                  <DiCss3 className='css-icon' size={22} />
                  <SiJavascript className='js-icon' size={22} />
                  <SiDjango className='django-icon' size={22} />
                </div>
              </div>

              <div className='projects-card-buttons'>
                <a className='github projects-card-button' href='https://github.com/pedroflp/tieri-beats' target='_blank' data-tip='Ver código'>
                  <AiFillGithub size={30}  />
                </a>

                <a className='browser projects-card-button' href='https://tieribeats.herokuapp.com/beats' target='_blank' data-tip='Ver site'>
                  <AiFillChrome size={30} />
                </a>
              </div>
            </div>

            <div className='pormazion projects-card'>
              <div className='projects-card-title'>
                <RiTShirt2Line className='projects-card-icon' size={80}/>
                <h1><strong>PORMAZIONStore</strong></h1>
                <p>Site criado para um cliente <strong>designer gráfico</strong> com finalidade de mostrar e vender seu produto.</p>
              </div>

              <div className='projects-card-languages'>
                <span>Linguagens utilizadas:</span>
                <div className='projects-card-languages-icons'>
                  <AiFillHtml5 className='html-icon' size={22} />
                  <DiCss3 className='css-icon' size={22} />
                  <SiJavascript className='js-icon' size={22} />
                </div>
              </div>

              <div className='projects-card-buttons'>
                <a className='github projects-card-button' href='https://github.com/pedroflp/pormazion-store' target='_blank' data-tip='Ver código'>
                  <AiFillGithub size={30}  />
                </a>

                <a className='browser projects-card-button' href='https://pormazion.github.io/store' target='_blank' data-tip='Ver site'>
                  <AiFillChrome size={30} />
                </a>
              </div>
            </div>
          
            <div className='eject projects-card'>
              <div className='projects-card-title'>
                <BsEject className='projects-card-icon' size={80} />
                <h1><strong>EJECT</strong> PS2019</h1>
                <p>Site criado para o processo seletivo de 2019 da empresa <strong data-tip='Empresa Junior da Escola de Ciência e Tecnologia'>EJECT</strong>.</p>
              </div>

              <div className='projects-card-languages'>
                <span>Linguagens utilizadas:</span>
                <div className='projects-card-languages-icons'>
                  <AiFillHtml5 className='html-icon' size={22} />
                  <DiCss3 className='css-icon' size={22} />
                  <SiJavascript className='js-icon' size={22} />
                </div>
              </div>

              <div className='projects-card-buttons'>
                <a className='github projects-card-button' href='https://github.com/pedroflp/EJECT2019' target='_blank' data-tip='Ver código'>
                  <AiFillGithub size={30}  />
                </a>

                <a className='browser projects-card-button' href='https://pedroflp.github.io/EJECT2019' target='_blank' data-tip='Ver site'>
                  <AiFillChrome size={30} />
                </a>
              </div>
            </div>
          </div>

        {/* <button className='projects-button-showmore'>Mostrar mais...</button> */}
      </div>
    </section>

    </>
  )
}

export default MainPage;