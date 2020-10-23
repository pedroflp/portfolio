import React from 'react';

interface SobreInfo {
  text: string;
}

function SobreInfo(props: SobreInfo){
  return (
    <div>
      <p>{props.text}</p>
    </div>
  )
}



export default SobreInfo;