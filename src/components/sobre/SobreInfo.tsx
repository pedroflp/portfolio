import React from 'react';

interface SobreProps {
  text: string | any;
}

function SobreInfo(props: SobreProps) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  )
}



export default SobreInfo;