import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

// Icons
import { RiHospitalLine, RiTShirt2Line } from 'react-icons/ri';
import { FaInstagram, FaLinkedin, FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub, AiOutlineCalculator, AiOutlinePlus, AiOutlineQuestionCircle, AiOutlineShop } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiGmail, SiTypescript, SiDjango } from 'react-icons/si';
import { BiHeadphone } from 'react-icons/bi';

// Components
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ProjectCard from '../components/projects/ProjectCard';

// Other
import './styles/mainpage.css';
import BackTop from '../components/backtop/BackTop';
import { Header } from '../components/header/Header';
import StockProjectCard from '../components/projects/components/StockProjectCard';


function MainPage() {
  const [canShow, setCanShow] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [toggleShow, setToggleShow] = useState(false);
  
  const [timer, setTimer] = useState(100);
  const [timerCount, setTimerCount] = useState(10);
  
  const checkScroll = () => {
    if (canShow && (window.pageYOffset > 550)){
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setCanShow(false);
      }, 10000);
    }
  }
  window.addEventListener('scroll', checkScroll);
  
  useEffect(() => {
    if (canShow && isVisible) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 85);
      setTimeout(() => {
        setTimerCount(timerCount - 1);
      }, 1000);
    }
  }, [isVisible, canShow, timer, timerCount]);
  
  function handleHover() {
    setToggleShow(true);
  } 

  function handleUnhover() {
    setToggleShow(false)
  }

  return(
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

        { canShow && isVisible && (
          <div className='card-popup'>
            <div className='card-popup-arrow-left'></div>
            <p>Ao passar o mouse no card da tecnologia, uma barra de score irá aparecer. Colocando o mouse por cima, você verá porcentagem de skill que eu considero possuir!</p>
            <br/>
            <div style={{width: `${timer}%`}} className='timer-line'></div>
            { timerCount < 10 ? <span>00:0{timerCount}</span> : <span>00:{timerCount}</span>}
          </div> ) 
        }

          { !canShow && 
            <AiOutlineQuestionCircle 
              size={25}
              style={{
                cursor: 'pointer',
                position: 'relative',
                top: 0,
                marginTop: '-50px'
              }} 
              onMouseOver={handleHover}
              onMouseOut={handleUnhover}
            />
          }

        { !canShow && toggleShow && (
          <div className='card-popup'>
            <div className='card-popup-arrow-left'></div>
            <p>Ao passar o mouse no card da tecnologia, uma barra de score irá aparecer. Colocando o mouse por cima, você verá porcentagem de skill que eu considero possuir!</p>
          </div>
          ) 
        }

          <div className='html habilities-card' data-tip='HTML5'>
            <AiFillHtml5 className='html-icon' size={50} />
            <div style={{ width: '95%' }} data-tip="Skill: 95%" className='html skill-score' />
          </div>
          <div className='css habilities-card' data-tip='CSS3'>
            <DiCss3 className='css-icon' size={50} />
            <div style={{ width: '90%' }} data-tip="Skill: 90%"  className='css skill-score' />
          </div>
          <div className='js habilities-card' data-tip='JavaScript'>
            <SiJavascript className='js-icon' size={50} />
            <div style={{ width: '75%' }} data-tip="Skill: 75%"  className='js skill-score' />
          </div>
          <div className='reactjs habilities-card' data-tip='ReactJS'>
            <SiReact className='reactjs-icon' size={50} />
            <div style={{ width: '70%' }} data-tip="Skill: 70%"  className='reactjs skill-score' />
          </div>
          <div className='typescript habilities-card' data-tip='Typescript'>
            <SiTypescript className='typescript-icon' size={50} />
            <div style={{ width: '45%' }} data-tip="Skill: 45%"  className='typescript skill-score' />
          </div>
          <div className='nodedjango habilities-card' data-tip='Node.js / Django'>
            <FaNodeJs className='node-icon' size={40} />
            <div className='line'></div>
            <SiDjango className='django-icon' size={40} />
            <div style={{ width: '45%' }} data-tip="Node.js Skill: 45%"  className='node skill-score' />
            <div style={{ width: '30%' }} data-tip="Django Skill: 30%"  className='django skill-score' />
          </div>
        </div>
      </div>
    </section>

    <section id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>Meus <strong>Projetos</strong>.</h1>
          <p>Abaixo estão meus <strong>projetos favoritos</strong> que desenvolvi para <strong>estudos</strong> e para <strong>clientes</strong>.</p>
        </div>

          <div id='projects-cards'> 

            <StockProjectCard />

            <div className='tieri-beats projects-card'>
              <BiHeadphone className='projects-card-icon' size={300} />
              <ProjectCard
                title='Tieri Beats'
                description='Site de uma loja criado para um cliente produtor musical com finalidade de mostrar e vender seu produto.'
                tecnologias={[
                  'https://img.icons8.com/material-sharp/1000/04D361/html-5.png',
                  'https://img.icons8.com/ios-filled/1000/04D361/css3.png',
                  'https://img.icons8.com/ios-filled/1000/04D361/javascript.png',
                  'https://img.icons8.com/windows/1000/04D361/django.png'
                ]}
                ghLink='https://github.com/pedroflp/tieri-beats'
                brLink='https://tieribeats.herokuapp.com'
              />
            </div>

            <div className='pormazion projects-card'>
              <AiOutlineShop className='projects-card-icon' size={300} />
                <ProjectCard
                title='PORMAZIONStore'
                description='Site de uma loja criado para um cliente designer gráfico com finalidade de mostrar e vender seu produto.'
                tecnologias={[
                  'https://img.icons8.com/material-sharp/1000/04D361/html-5.png',
                  'https://img.icons8.com/ios-filled/1000/04D361/css3.png',
                  'https://img.icons8.com/ios-filled/1000/04D361/javascript.png',
                ]}
                ghLink='https://github.com/pedroflp/pormazion-store'
                brLink='https://pormazion.github.io/store'
              />
            </div>

            <div className='medfamilia projects-card'>
              <RiHospitalLine className='projects-card-icon' size={290}  />
              <ProjectCard
              title='MedFamília'
              description='Site de uma clínica criado para o desafio do processo trainee de 2020 da empresa EJECT.'
              tecnologias={[
                'https://img.icons8.com/material-sharp/48/04D361/html-5.png',
                'https://img.icons8.com/ios-filled/1000/04D361/css3.png',
                'https://img.icons8.com/ios-filled/1000/04D361/javascript.png',
                'https://img.icons8.com/windows/1000/04D361/django.png',
              ]}
              ghLink='https://github.com/pedroflp/trainee-projeto'
              brLink=''
            />
            </div>
          
            <div className='ufcalc projects-card'>
              <AiOutlineCalculator className='projects-card-icon' size={290}  />
              <ProjectCard
              title='UFRN Calc'
              description='Site criado para alunos da UFRN calcularem suas médias semestrais.'
              tecnologias={[
                'https://img.icons8.com/material-sharp/1000/04D361/html-5.png',
                'https://img.icons8.com/ios-filled/1000/04D361/css3.png',
                'https://img.icons8.com/ios-filled/1000/04D361/javascript.png',
              ]}
              ghLink='https://github.com/pedroflp/ufrn-calc'
              brLink='https://pedroflp.github.io/ufrn-calc/'
            />
            </div>

            <div className='shirtstore projects-card'>
              <RiTShirt2Line className='projects-card-icon' size={300}  />
              <ProjectCard
              title='T-Shirt Store'
              description='Site criado para estudar criação de Loja usando Next.js com integração da API do Stripe.'
              tecnologias={[
                'https://img.icons8.com/ios-filled/1000/04D361/react-native.png',
              ]}
              ghLink='https://github.com/pedroflp/nextjs-stripe-store'
              brLink='https://next-stripe-store.vercel.app/'
            />
            </div>
          
          </div>

          <div className='projects-button-container'>
            <Link to='/repositories' className='projects-button-repositories' >Ver todos os projetos <AiOutlinePlus style={{ marginLeft: '5px' }} size={24} /></Link>
          </div>
      </div>
    </section>

    <section id='contact'>
      <div className='contact-container'>
        <div className='contact-cards'>

          <a className='github-icon contact-card' href='https://github.com/pedroflp' target='_blank' rel='noopener noreferrer'>
            <AiFillGithub className='github icon' size={60} />
          </a>
          <a className='linkedin-icon contact-card' href='https://www.linkedin.com/in/pedroflp' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='linkedin icon' size={60} />
          </a>
          <a className='instagram-icon contact-card' href='https://instagram.com/_pedroflp' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='instagram icon' size={60} />
          </a>
          <a className='email-icon contact-card' href='mailto: pedrofelipe0940@gmail.com' data-tip='pedrofelipe0940@gmail.com' target='_blank' rel='noopener noreferrer'>
            <SiGmail className='email icon' size={60} />
          </a>

        </div>

        <div className='contact-title'>
          <h1>Venha me <strong>Contatar</strong>.</h1>
          <p>Oi de novo! Vou deixar algumas <strong>redes sociais</strong> para me contatar quando quiser.</p>
        </div>
      </div>
      
    </section>

    <Footer />

    <BackTop />

    <ReactTooltip 
    backgroundColor='#dfdfdf'
    offset={{ top: 10 }}
    className='global-tooltip' 
    textColor='rgb(18, 18, 19)' 
    place='top' />

    </>
  )
}

export default MainPage;
