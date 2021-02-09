import React, { useState, useEffect } from 'react';

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

  useEffect( () => { loadRepos() }, []) 

  return (
    <>

      {repositories?.map(repo => (
        <div key={repo.name} className={`${repo.name} repository-card`}>
          <h1 title={repo.name} >{repo.name}</h1>
          {repo.description ? <p title={repo.description}>{repo.description}</p> : <div className='wireframe-description'></div> }

          <div className='line-divisor'></div>

          <div className='repository-buttons-container'>
            <a href={repo.html_url} target='_blank' ><AiFillGithub size={30}/> <span>Ver repositório no Github</span></a>
          </div>
        </div>
      ))}

  </>
  );
}

export default RespositoriesCard;