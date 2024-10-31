import React, { useState } from 'react';
import './Accordion.css';

import MinusIcon from '../img/minus.png';
import PlusIcon from '../img/plus.png';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const Minus = () => {return (<img src={MinusIcon} object-fit='cover' height='20px' />); };
  const Plus = () => {return (<img src={PlusIcon} object-fit='cover' height='20px' />); };

  return (
    <div className="accordion-item">
      <button className="accordion-titlebar" onClick={() => setIsActive(!isActive)}>
        {title}
        <span className='accordion-icon'>{isActive ? '-': '+'}</span>
      </button>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;

/*
        <div className="accordion-title">{title}</div>

<div className="accordion-item">
  <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
    <div>{title}</div>
    <div>{isActive ? '-' : '+'}</div>
  </div>
  {isActive && <div className="accordion-content">{content}</div>}
</div>
*/
