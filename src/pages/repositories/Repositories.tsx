import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import RepositoriesCard from '../../components/repositories/RepositoriesCard';
import BackTop from '../../components/backtop/BackTop';

import './style/repositories.css';

function Respositories() {
  
  return (
    <>
    
    <Navbar />

    <div className='repositories-container'>
      <Link className='backhome-button' to='/'><FiArrowLeft size={20} /> Voltar para o Início</Link>
      <div className='repositories-title'>
        <h1>Meus <strong>repositórios</strong>.</h1>
        <p>Abaixo estão todos os meus <strong>projetos </strong> que foram publicados no Github.</p>
      </div>

      <div className='repositories-list'>
      <RepositoriesCard />
      </div>
    </div>

    <Footer />

    <BackTop />
  </>
  );
}

export default Respositories;