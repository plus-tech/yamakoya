import React, { useState } from 'react';
import './Accordion.css';


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

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
