import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { darken } from 'polished';
import { BsLink45Deg } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { useTheme } from '../../styles/themes/ThemeContext';
import './style.css';

function ProjectCard() {
  const { defaultTheme } = useTheme()

  const iconColor = darken(0.1, defaultTheme.colors.text).replace('#', '')

  const projectList = [
    // {
    //   icon: `https://img.icons8.com/fluent-systems-regular/1000/${iconColor}/headphones.png`,
    //   title: '🎧 Tieri Beats',
    //   description: 'Plataforma de audio stream & loja de músicas digitais para um produtor.',
    //   ghLink: 'https://github.com/pedroflp/tieri-beats',
    //   brLink: 'https://tieribeats.herokuapp.com',
    //   tecnologias: [
    //     {
    //       name: 'HTML',
    //       imageUrl: 'https://img.icons8.com/material-sharp/100/6430d4/html-5.png',
    //     },
    //     {
    //       name: 'CSS',
    //       imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/css3.png',
    //     },
    //     {
    //       name: 'Javascript',
    //       imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/javascript.png',
    //     },
    //     {
    //       name: 'jQuery',
    //       imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/jquery.png',
    //     },
    //     {
    //       name: 'Django',
    //       imageUrl: 'https://img.icons8.com/windows/100/6430d4/django.png',
    //     }
    //   ],
    // },
    {
      icon: `https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/10000/${iconColor}/external-package-advertising-kiranshastry-lineal-kiranshastry.png`,
      title: '🔍📦 TrackIt',
      description: 'Site de busca e tracking de encomendas nacionais postadas pelos correios.',
      ghLink: 'https://github.com/pedroflp/track.it',
      brLink: 'https://tracking-it.vercel.app',
      tecnologias: [
        {
          name: 'ReactJS',
          imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/react-native.png',
        },
      ],
    },
    {
      icon: `https://img.icons8.com/ios/1000/${iconColor}/bank-card-back-side.png`,
      title: '💳 CardGrab',
      description: 'Aplicativo mobile para guardar as informações básicas de seus cartões.',
      ghLink: 'https://github.com/pedroflp/card-grab-app',
      brLink: 'https://play.google.com/store/apps/details?id=com.pedroflp.cardgrabapp',
      tecnologias: [
        {
          name: 'React Native',
          imageUrl: 'https://img.icons8.com/ios/100/6430d4/react-native--v1.png',
        },
      ],
    },
    // {
    //   icon: `https://img.icons8.com/material-outlined/1000/${iconColor}/pen.png`,
    //   title: '✒️ PORMAZION',
    //   description: 'Loja criada para estúdio de design e artes visuais',
    //   ghLink: 'https://github.com/pormazion/store',
    //   brLink: 'https://pormazion.github.io/store',
    //   tecnologias: [
    //     {
    //       name: 'HTML',
    //       imageUrl: 'https://img.icons8.com/material-sharp/100/6430d4/html-5.png',
    //     },
    //     {
    //       name: 'CSS',
    //       imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/css3.png',
    //     },
    //     {
    //       name: 'Javascript',
    //       imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/javascript.png',
    //     },
    //   ],
    // },
    // {
    //   icon: `https://img.icons8.com/material-outlined/1000/${iconColor}/t-shirt.png`,
    //   title: '🎽 T-Shirt Store',
    //   description: 'Site criado para estudar criação de Loja usando Next.js com integração da API de pagamento do Stripe.',
    //   ghLink: 'https://github.com/pedroflp/trainee-projeto',
    //   brLink: 'https://next-stripe-store.vercel.app',
    //   tecnologias: [
    //     {
    //       name: 'ReactJS',
    //       imageUrl: 'https://img.icons8.com/ios-filled/100/6430d4/react-native.png',
    //     },
    //     {
    //       name: 'Typescript',
    //       imageUrl: 'https://img.icons8.com/material-rounded/100/6430d4/typescript.png',
    //     }
    //   ],
    // },
    // {
    //   icon: 'https://img.icons8.com/fluent-systems-regular/1000/${iconColor}/calculator.png',
    //   title: '➗ UFRN Calc',
    //   description: 'Site criado para calcular média semestral de alunos da Universidade Federal do Rio Grande do Norte.',
    //   ghLink: 'https://github.com/pedroflp/vue-ufrn-calc',
    //   brLink: '',
    //   tecnologias: [
    //     {
    //       name: 'Vue.js',
    //       imageUrl: 'https://img.icons8.com/windows/100/6430d4/vuejs.png',
    //     },
    //   ],
    // },

  ]

  return (
    <Carousel
      width={300}
      showStatus={false}
      useKeyboardArrows={true}
      centerMode={true}
      centerSlidePercentage={110}
      showArrows={true}
      showThumbs={false}
    >
      {projectList.map(project => {
        return (
          <div key={project.title} className={`${project.title} projects-card`}>
            {project.icon.length >= 20 && <img src={project.icon} className='projects-card-icon' alt="" />}
            <div className='projects-card-title'>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
            <div className='projects-card-languages'>
              <h3>Desenvolvido com:</h3>
              <div className='projects-card-languages-image'>
                {project.tecnologias.map(tecnologia => {
                  return (
                    <div key={tecnologia.name}>
                      <img src={tecnologia.imageUrl} alt="" />
                      <span>{tecnologia.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='line-divisor'></div>

            <div className='projects-card-buttons'>
              {project.ghLink && <a className='github projects-card-button' href={project.ghLink} target='_blank' rel='noopener noreferrer'>
                <FiGithub size={25} />
              </a>}

              {project.brLink && <a className='browser projects-card-button' href={project.brLink} target='_blank' rel='noopener noreferrer'>
                <BsLink45Deg size={30} /> Acessar aplicação
              </a>}
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ProjectCard;