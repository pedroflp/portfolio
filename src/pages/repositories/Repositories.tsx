import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import RepositoriesCard from '../../components/repositories/RepositoriesCard';

import './style/repositories.css';
import BackHome from '../../components/backtohome/BackHome';

function Respositories() {

  return (
    <>

      <Navbar />

      <div className='repositories-container'>
        <BackHome />
        <div className='repositories-title'>
          <h1>Meus <strong>repositórios</strong>.</h1>
          <p>Abaixo estão todos os meus <strong>projetos </strong> que foram publicados no Github.</p>
        </div>

        <div className='repositories-list'>
          <RepositoriesCard />
        </div>
      </div>
    </>
  );
}

export default Respositories;