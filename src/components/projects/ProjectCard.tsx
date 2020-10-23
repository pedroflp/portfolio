import React from 'react';

import { AiFillHtml5, AiFillGithub, AiFillChrome } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiDjango } from 'react-icons/si';

import './style.css';

interface ProjectCard {
  title: string;
  description: string;
  tecnologias: string;
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
      <span>{props.tecnologias}</span>
    </div>

    <div className='projects-card-buttons'>
      <span>Visualizar projeto como:</span>
      <a className='github projects-card-button' href={props.ghLink} target='_blank' data-tip='Como Código'>
        <AiFillGithub size={30} />
      </a>

      <a className='browser projects-card-button' href={props.brLink} target='_blank' data-tip='Como Site'>
        <AiFillChrome size={30} />
      </a>
    </div>

      </>
  )
}

export default ProjectCard;