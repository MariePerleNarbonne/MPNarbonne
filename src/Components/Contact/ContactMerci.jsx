import React, { useState } from 'react';
import './ContactMerci.css';
import { FaDribbble } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactMerci = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('Cliquer pour copier');

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  const handleEmailClick = () => {
    const emailText = 'narbonne.mp@gmail.com';
    const textArea = document.createElement('textarea');
    textArea.value = emailText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Update tooltip text to indicate successful copy
    setTooltipText('Courriel copié');

    // Show tooltip for a short duration
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
      // Reset tooltip text after hiding
      setTooltipText('Cliquer pour copier');
    }, 2000); // Adjust the duration as needed
  };

  window.addEventListener("resize", updateSize);

  return (
    <section className='contactMerci-container'>
      <div className="merci-infos">
        <p
          className='merci-email'
          onClick={handleEmailClick}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          style={{ cursor: 'pointer' }}
        >
          {tooltipVisible && <span className="tooltip-email">{tooltipText}</span>}
          narbonne.mp@gmail.com
        </p>
        <div className="merci-icones">
          <p className='linkedin merci-i'><Link to="https://www.linkedin.com/in/mp-narbonne/"><FaLinkedinIn size={width >= 750 ? "50" : "40"}/></Link></p>
          <p className='dribbble merci-i'><Link to="https://dribbble.com/MP-Narbonne"><FaDribbble size={width >= 750 ? "70" : "60"}/></Link></p>               
          <p className='pinterest merci-i'><Link to="https://dribbble.com/MP-Narbonne"><FaPinterest size={width >= 750 ? "70" : "60"}/></Link></p>     
        </div>
      </div>
      <div className="merci-signature">
        <p>MP</p>
      </div>
    </section>
  );
};

export default ContactMerci;
