import React from 'react';

interface SobreProps {
  text: string;
}

function SobreInfo(props: SobreProps){
  return (
    <div>
      <p>{props.text}</p>
    </div>
  )
}



export default SobreInfo;