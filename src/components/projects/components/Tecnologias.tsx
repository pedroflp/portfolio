import React from 'react';

interface Tecnologias {
  tecnologiasImageUrl: string[];
}

function Tecnologias(props: Tecnologias) {
  return (
    <>
  
    {props.tecnologiasImageUrl.map((url, i) => {
        return (
          <img src={url} />
        )
      })
    }

    </>
  );
}

export default Tecnologias;