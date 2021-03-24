import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import { AiFillGithub } from 'react-icons/ai';

import './style.css'

interface Repository {
  name: string,
  description: string,
  html_url: string,
}

function RespositoriesCard() {
  const [repositories, setRepositories] = useState<[Repository]>();

  async function loadRepos() {
    const response = await fetch('https://api.github.com/users/pedroflp/repos');
    const data = await response.json();  

    setRepositories(data);
  }

  useEffect(() => { 
    setTimeout(() => {
      loadRepos()
    }, 1000) 
  }, [repositories]); 

  return (
    <>

      {repositories != null ? repositories?.map(repo => (
        <div key={repo.name} className={`${repo.name} repository-card`}>
          <h1 title={repo.name} >{repo.name}</h1>
          {repo.description ? <p title={repo.description}>{repo.description}</p> : <div className='wireframe-description'></div> }

          <div className='line-divisor'></div>

          <div className='repository-buttons-container'>
            <a href={repo.html_url} target='_blank' rel="noopener noreferrer" ><AiFillGithub size={30}/> <span>Ver repositório no Github</span></a>
          </div>
        </div>
        )) :
         <Loader
            type="TailSpin"
            color="#04D361"
            height={100}
            width={100}
          />
      }

    </>
  );
}

export default RespositoriesCard;