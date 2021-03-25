import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';

import Tecnologias from './components/Tecnologias';

import './style.css';

interface ProjectCard {
  title: string;
  description: string;
  tecnologias: string[];
  ghLink: string;
  brLink: string;
}

function ProjectCard(props: ProjectCard) {
  return (
    <>
    
      <div className='projects-card-title'>
        <h1><strong>{props.title}</strong></h1>
        <p>{props.description}</p>
      </div>
      <div className='projects-card-languages'>
        <h3>Desenvolvido com:</h3>
        <div className='projects-card-languages-image'>
          <Tecnologias tecnologiasImageUrl={props.tecnologias}/>
        </div>
      </div>

      <div className='line-divisor'></div>

      <div className='projects-card-buttons'>
        { props.ghLink && <a className='github projects-card-button' href={props.ghLink} target='_blank' rel='noopener noreferrer'>
          <FiGithub size={25} />
        </a> }

        { props.brLink && <a className='browser projects-card-button' href={props.brLink} target='_blank' rel='noopener noreferrer'>
          <BsLink45Deg size={30} /> Acessar aplicação
        </a> }
      </div>

      </>
  )
}

export default ProjectCard;