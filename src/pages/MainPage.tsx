import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

// Icons
import { RiHospitalLine, RiTShirt2Line } from 'react-icons/ri';
import { FiMusic } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub, AiOutlineCalculator } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiDjango, SiGmail, SiTypescript } from 'react-icons/si';
import { BiStore } from 'react-icons/bi';

// Components
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ProjectCard from '../components/projects/ProjectCard';

// Other
import './styles/mainpage.css';
import ProfileImg from '../images/profile-image.png';
import BackTop from '../components/backtop/BackTop';


function MainPage() {
  return(
    <>

    <Navbar />
    <ReactTooltip backgroundColor='#04D361' textColor='rgb(32, 31, 36)' place='bottom' />
    
    <section id='header-mainpage'>
      <div className='header-mainpage-container'>
        <div className='header-mainpage-information-card'>
          <img src={ProfileImg} alt='Profile' className='header-information-card-image' />
          
          <h1>Olá me chamo <strong>Pedro Felipe</strong>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('sou ')
                typewriter.typeString('Desenvolvedor <strong>Front-End</strong>')
                .pauseFor(2000)
                .deleteChars(23)
                .pauseFor(500)
                typewriter.typeString('<strong>Designer</strong>')
                .pauseFor(2000)
                .deleteAll()
                typewriter.typeString('e você está em meu <strong>Portfólio</strong>!')
                .pauseFor(5000)
                .start()
              }}
              options={{
                delay: 90,
                autoStart: true,
                loop: true,
              }}
            />
  
          </h1>
          <p>Atualmente sou desenvolvedor web e utilizo tecnologias como <strong>HTML5, CSS3, JavaScript e ReactJs</strong> para desenvolver aplicações front-end.</p>

          <Link to="/about" className='seemore-button'>Ver mais sobre!</Link>
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
          <div className='typescript habilities-card' data-tip='Typescript'>
            <SiTypescript className='typescript-icon' size={50} />
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
          <p>Abaixo estão meus <strong>projetos favoritos</strong> que desenvolvi para <strong>estudos</strong> e para <strong>clientes</strong>.</p>
        </div>

          <div id='projects-cards'> 

            <div className='tieri-beats projects-card'>
              <FiMusic className='projects-card-icon' size={70} />
              <ProjectCard
                title='Tieri Beats'
                description='Site de uma loja criado para um cliente produtor musical com finalidade de mostrar e vender seu produto.'
                tecnologias={[
                  'https://img.icons8.com/material-sharp/48/04D361/html-5.png',
                  'https://img.icons8.com/ios-filled/100/04D361/css3.png',
                  'https://img.icons8.com/ios-filled/50/04D361/javascript.png',
                  'https://img.icons8.com/windows/32/04D361/django.png'
                ]}
                ghLink='https://github.com/pedroflp/tieri-beats'
                brLink='https://tieribeats.herokuapp.com'
              />
            </div>

            <div className='pormazion projects-card'>
              <BiStore className='projects-card-icon' size={70}/>
                <ProjectCard
                title='PORMAZIONStore'
                description='Site de uma loja criado para um cliente designer gráfico com finalidade de mostrar e vender seu produto.'
                tecnologias={[
                  'https://img.icons8.com/material-sharp/48/04D361/html-5.png',
                  'https://img.icons8.com/ios-filled/100/04D361/css3.png',
                  'https://img.icons8.com/ios-filled/50/04D361/javascript.png',
                ]}
                ghLink='https://github.com/pedroflp/pormazion-store'
                brLink='https://pormazion.github.io/store'
              />
            </div>

            <div className='medfamilia projects-card'>
              <RiHospitalLine className='projects-card-icon' size={70} />
              <ProjectCard
              title='MedFamília'
              description='Site de uma clínica criado para o desafio do processo trainee de 2020 da empresa EJECT.'
              tecnologias={[
                'https://img.icons8.com/material-sharp/48/04D361/html-5.png',
                'https://img.icons8.com/ios-filled/100/04D361/css3.png',
                'https://img.icons8.com/ios-filled/50/04D361/javascript.png',
                'https://img.icons8.com/windows/32/04D361/django.png',
              ]}
              ghLink='https://github.com/pedroflp/trainee-projeto'
              brLink=''
            />
            </div>
          
            <div className='ufcalc projects-card'>
              <AiOutlineCalculator className='projects-card-icon' size={70} />
              <ProjectCard
              title='UFRN Calc'
              description='Site criado para alunos da UFRN calcularem suas médias semestrais.'
              tecnologias={[
                'https://img.icons8.com/material-sharp/48/04D361/html-5.png',
                'https://img.icons8.com/ios-filled/100/04D361/css3.png',
                'https://img.icons8.com/ios-filled/50/04D361/javascript.png',
              ]}
              ghLink='https://github.com/pedroflp/ufrn-calc'
              brLink='https://pedroflp.github.io/ufrn-calc/'
            />
            </div>

            <div className='shirtstore projects-card'>
              <RiTShirt2Line className='projects-card-icon' size={70} />
              <ProjectCard
              title='T-Shirt Store'
              description='Site criado para estudar criação de Loja usando Next.js com integração da API do Stripe.'
              tecnologias={[
                'https://img.icons8.com/ios-filled/50/04D361/react-native.png',
              ]}
              ghLink='https://github.com/pedroflp/nextjs-stripe-store'
              brLink='https://next-stripe-store.vercel.app/'
            />
            </div>
          
          </div>

          <div className='projects-button-container'>
            <Link to='/repositories' className='projects-button-repositories' >Ver todos os projetos</Link>
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
          <a className='email-icon contact-card' href='mailto: pedrofelipe0940@gmail.com' target='_blank' rel='noopener noreferrer'>
            <SiGmail className='email icon' size={60} />
          </a>

        </div>

        <div className='contact-title'>
          <h1>Venha me <strong>Contatar</strong>.</h1>
          <p>Oi mais uma vez. Vou deixar algumas <strong>redes sociais</strong> para me contatar quando necessário!!</p>
        </div>
      </div>
      
    </section>

    <Footer />

    <BackTop />

    </>
  )
}

export default MainPage;
