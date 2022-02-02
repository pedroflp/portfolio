import React from 'react';

import './style.css';

interface HabilitiesProps {
  name: string,
  children: React.ReactChild,
}

export default function HabilitiesCard(props: HabilitiesProps) {
  return (
    <div
      key={props.name}
      className={`${props.name} habilities-card`}
    >
      <div className={`${props.name}-card habilities-card-info`} >
        <span className={`${props.name}-card-name name`}>{props.name}</span>
        <div className='icon'>{props.children}</div>
      </div>
    </div>
  )
}