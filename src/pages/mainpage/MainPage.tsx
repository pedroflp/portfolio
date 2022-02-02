import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

// Icons
import { FaInstagram, FaLinkedin, FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub, AiOutlinePlus } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiGmail, SiTypescript } from 'react-icons/si';
import { FiMessageSquare } from 'react-icons/fi';

// Components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/projects/ProjectCard';
import { Header } from '../../components/header/Header';
import StockProjectCard from '../../components/projects/components/StockProjectCard';

// Other
import '../mainpage/style/habilities.css';
import '../mainpage/style/projects.css';
import '../mainpage/style/contact.css';
import HabilitiesCard from '../../components/habilities/HabilitiesCard';

function MainPage() {

  return (
    <>

      <Navbar />

      <Header />

      <section id='skills'>
        <div className='habilities-container'>
          <div className='habilities-title'>
            <h1>Minhas <strong>Habilidades</strong>.</h1>
            <p>Ao lado estão as <strong>tecnologias e frameworks</strong> que possuo habilidades e conhecimentos.</p>
          </div>

          <div className='habilities-cards'>
            <HabilitiesCard
              name='html'
            >
              <AiFillHtml5 className='html-icon' size={60} />
            </HabilitiesCard>

            <HabilitiesCard
              name='css'
            >
              <DiCss3 className='css-icon' size={60} />
            </HabilitiesCard>

            <HabilitiesCard
              name='javascript'
            >
              <SiJavascript className='javascript-icon' size={60} />
            </HabilitiesCard>

            <HabilitiesCard
              name='typescript'
            >
              <SiTypescript className='typescript-icon' size={60} />
            </HabilitiesCard>

            <HabilitiesCard
              name='react'
            >
              <SiReact className='react-icon' size={60} />
            </HabilitiesCard>

            <HabilitiesCard
              name='nodejs'
            >
              <FaNodeJs className='nodejs-icon' size={60} />
            </HabilitiesCard>
          </div>
        </div>
      </section>

      <section id='projects'>
        <div className='projects-container'>
          <div className='projects-title'>
            <h1>Meus <strong>Projetos</strong>.</h1>
            <p>Abaixo estão meus <strong>projetos favoritos</strong> que desenvolvi para <strong>estudos</strong> e para <strong>clientes</strong>.</p>
          </div>

          <div className='projects-cards'>

            <StockProjectCard />

            <ProjectCard />

          </div>

          <div className='projects-button-container'>
            <Link to='/repositories' className='projects-button-repositories' >Ver todos os projetos <AiOutlinePlus style={{ marginLeft: '5px' }} size={24} /></Link>
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className='contact-container'>
          <div className='contact-cards'>
            <div className="contact-card-social">
              <a className='github-icon contact-card' href='https://github.com/pedroflp' target='_blank' rel='noopener noreferrer'>
                <AiFillGithub className='github icon' size={50} />
              </a>
              <a className='linkedin-icon contact-card' href='https://www.linkedin.com/in/pedroflp' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='linkedin icon' size={50} />
              </a>
              <a className='instagram-icon contact-card' href='https://instagram.com/_pedroflp' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='instagram icon' size={50} />
              </a>
              <a className='email-icon contact-card' href='mailto: pedrofelipe0940@gmail.com' data-tip='pedrofelipe0940@gmail.com' target='_blank' rel='noopener noreferrer'>
                <SiGmail className='email icon' size={50} />
              </a>
            </div>
            <Link to='/direct-message' className="contact-card-dmbutton">Enviar mensagem <FiMessageSquare size={22} /></Link>
          </div>

          <div className='contact-title'>
            <h1>Venha me <strong>Contatar</strong>.</h1>
            <p>Oi de novo! Vou deixar algumas <strong>redes sociais</strong> para me contatar quando quiser.</p>
          </div>
        </div>

      </section>

      <Footer />

      <ReactTooltip
        offset={{ top: 10 }}
        backgroundColor='rgba(0, 0, 0, 0.8)'
        className='global-tooltip'
        place='top'
      />

    </>
  )
}

export default MainPage;
