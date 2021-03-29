import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './style.css'


function BackTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
    { showScroll && <button className='button-back-top' onClick={scrollTop}>Voltar para o topo<FiArrowRight size={20} /></button> }
    </>
  )

}

export default BackTop;
