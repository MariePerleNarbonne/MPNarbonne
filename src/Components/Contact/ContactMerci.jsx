import React, { useState } from 'react';
import './ContactMerci.css';
import { FaDribbble } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactMerci = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = () => {
      setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateSize);

    return (
      <section className='contactMerci-container'>
            <div className="merci-infos">
              <p className='merci-email'>narbonne.mp@gmail.com</p>
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
    )
    
  };
  
  export default ContactMerci;

// *****************************************
//             999 999  88888
//             9  9  9  8   8
//        ---  9  9  9  88888  ---
//             9     9  8      
//             9     9  8
// *****************************************