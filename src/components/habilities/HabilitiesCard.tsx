import React, { useEffect, useState } from 'react';

import './style.css';

interface HabilitiesCard{ 
  name: string,
  skillPercent: number,
  children: React.ReactChild,
}

export default function HabilitiesCard(props: HabilitiesCard) {
  const [isHover, setIsHover] = useState(false);
  const [skillPercent, setSkillPercent] = useState(0);

  function handleOverSkillBar() {
    setIsHover(true);
  }

  function handleOutSkillBar() {
    setIsHover(false);
  }

  useEffect(() => {
    if (isHover) {
      if (skillPercent !== props.skillPercent) {
        setTimeout(() => {
          setSkillPercent(skillPercent + 1);
        }, 10);
      }
    }
  }, [skillPercent, props.skillPercent, isHover])

  return (
    <div 
      key={props.name} 
      onMouseOver={handleOverSkillBar} 
      onMouseOut={handleOutSkillBar} 
      className={`${props.name} habilities-card`}
    >
      <div className={`${props.name}-card habilities-card-info`} >
        <span className={`${props.name}-card-name name`}>{props.name}</span>
        {props.children}
      </div>
      <span 
        style={ skillPercent < props.skillPercent ? { width: `${skillPercent}%`, marginLeft: '30px' } : { width: `${skillPercent}%`, marginLeft: '0px' }} 
        className={`${props.name}-percent skill-percent`} 
      >
        {skillPercent}%
      </span>
      <div 
        style={{ width: `${skillPercent}%` }}
        className={`${props.name} skill-bar`}
      />
    </div>
  )
}