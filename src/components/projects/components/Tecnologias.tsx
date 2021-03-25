import React from 'react';

interface Tecnologias {
  tecnologiasImageUrl: string[];
}

function Tecnologias(props: Tecnologias) {
  return (
    <>
  
    {props.tecnologiasImageUrl.map((url, i) => {
        return (
          <img src={url} style={{width: '40px', height: '40px'}} alt='Ícone' />
        )
      })
    }

    </>
  );
}

export default Tecnologias;