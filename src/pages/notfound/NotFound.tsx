import React from 'react';
import BackHome from '../../components/backtohome/BackHome';

import Error404 from '../../media/images/404';

import './style/notfound.css';

export default function NotFound() {
  return (
    <div className='notfound-container'>
      <Error404 />
      <div className='notfound-title'>
        <span><strong>Ooooops...</strong></span>
        <h1><strong>404</strong></h1>
        <p>Parece que essa página foi abduzida e não existe!</p>
        <BackHome />
      </div>
    </div>
  );
}
