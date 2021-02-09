import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BackTop from '../components/back-to-top/BackTop';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

import RepositoriesCard from '../components/repositories/RepositoriesCard';

import './styles/repositories.css';

function Respositories() {
  
  return (
    <>
    
    <Navbar />

    <div className='repositories-container'>
      <Link className='backhome-button' to='/'><FiArrowLeft size={20} /> Voltar para o Início</Link>
      <div className='repositories-title'>
        <h1>Meus repositórios</h1>
        <p>Abaixo estão todos os meus <strong>repositórios publicados</strong> no github</p>
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