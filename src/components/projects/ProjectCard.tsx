import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { RiChromeFill } from 'react-icons/ri';

import './style.css';

import Tecnologias from './components/Tecnologias';

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
      <h3>Tecnologias utilizadas:</h3>
      {/* <span>{props.tecnologias}</span> */}
      <div className='projects-card-languages-image'>
        <Tecnologias tecnologiasImageUrl={props.tecnologias}/>
      </div>
    </div>

    <div className='line-divisor'></div>

    <div className='projects-card-buttons'>
      <span>Visualizar projeto:</span>
      { props.ghLink && <a className='github projects-card-button' href={props.ghLink} target='_blank' >
        <AiFillGithub size={30} />
      </a> }

      { props.brLink && <a className='browser projects-card-button' href={props.brLink} target='_blank' >
        <RiChromeFill size={30} />
      </a> }
    </div>

      </>
  )
}

export default ProjectCard;