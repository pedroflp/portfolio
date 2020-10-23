import React from 'react';
import ReactTooltip from 'react-tooltip';

import { BsEject } from 'react-icons/bs';
import { RiTShirt2Line } from 'react-icons/ri';
import { FiMusic } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaNodeJs, FaTwitter } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiDjango } from 'react-icons/si';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ProfileImg from '../images/profile-image.png';

import './styles/mainpage.css';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/projects/ProjectCard';

function MainPage() {
  return(
    <>

    <Navbar />
    <ReactTooltip backgroundColor='#04D361' textColor='rgb(32, 31, 36)' place='bottom' />
    
    <section id='header-mainpage'>
      <div className='header-mainpage-container'>
        <div className='header-mainpage-information-card'>
          <img src={ProfileImg} className='header-information-card-image' />
          
          <h1>Olá me chamo <strong>Pedro Felipe</strong> e você está em meu Portfólio!</h1>
          <p>Atualmente sou desenvolvedor web e utilizo tecnologias como <strong>HTML5, CSS3, JavaScript</strong> para desenvolver aplicações front-end.</p>

          <Link to="/sobre" className='seemore-button'>Ver mais sobre!</Link>
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
              <FiMusic className='projects-card-icon' size={70} />
              <ProjectCard
                title='Tieri Beats'
                description='Site criado para um cliente produtor musical com finalidade de mostrar e vender seu produto.'
                tecnologias='html / css / js / django'
                ghLink='https://github.com/pedroflp/tieri-beats'
                brLink='https://tieribeats.herokuapp.com'
              />
            </div>

            <div className='pormazion projects-card'>
              <RiTShirt2Line className='projects-card-icon' size={70}/>
                <ProjectCard
                title='PORMAZIONStore'
                description='Site criado para um cliente designer gráfico com finalidade de mostrar e vender seu produto.'
                tecnologias='html / css / js '
                ghLink='https://github.com/pedroflp/pormazion-store'
                brLink='https://pormazion.github.io/pormazion-store'
              />
            </div>
          
            <div className='eject projects-card'>
              <BsEject className='projects-card-icon' size={70} />
              <ProjectCard
              title='EJECT PS2020'
              description='Site criado para o desafio do processo seletivo de 2020 da empresa EJECT.'
              tecnologias='html / css / js '
              ghLink='https://github.com/pedroflp/EJECT2020'
              brLink='https://pedroflp.github.io/EJECT2020'
            />
            </div>
          
          </div>

        <a className='projects-button-github' href='https://github.com/pedroflp' target='_blank'><AiFillGithub size={30} /> Visite meu GitHub para ver mais projetos</a>
      </div>
    </section>

    <section id='contact'>
      <div className='contact-container'>
        <div className='contact-cards'>

          <a className='github-icon contact-card' href='https://github.com/pedroflp' target='_blank'>
            <AiFillGithub className='github icon' size={60} />
          </a>
          <a className='linkedin-icon contact-card' href='https://www.linkedin.com/in/pedroflp' target='_blank'>
            <FaLinkedin className='linkedin icon' size={60} />
          </a>
          <a className='instagram-icon contact-card' href='https://instagram.com/_pedroflp' target='_blank'>
            <FaInstagram className='instagram icon' size={60} />
          </a>
          <a className='twitter-icon contact-card' href='https://twitter.com/pedroflp' target='_blank'>
            <FaTwitter className='twitter icon' size={60} />
          </a>

        </div>

        <div className='contact-title'>
          <h1>Venha me <strong>Contatar</strong>.</h1>
          <p>Oi mais uma vez. Vou deixar algumas <strong>redes sociais</strong> para me contatar quando necessário!!</p>
        </div>
      </div>
      
    </section>

    <Footer />

    </>
  )
}

export default MainPage;
