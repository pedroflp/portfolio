import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './backhome.css';

export default function BackHome() {
  return (
    <Link to='/' className='backhome-button'>
      <FiArrowLeft size={20} />  
      Voltar para o Início
    </Link>
  )
}