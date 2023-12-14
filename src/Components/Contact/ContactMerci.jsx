import React, { useState } from 'react';
import './ContactMerci.css';
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineDribbbleSquare } from "react-icons/ai";
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
                <p className='linkedin merci-i'><Link to="https://www.linkedin.com/in/mp-narbonne/"><GrLinkedin size={width >= 750 ? "70" : "50"}/></Link></p>
                <p className='dribbble merci-i'><Link to="https://dribbble.com/MP-Narbonne"><AiOutlineDribbbleSquare size={width >= 750 ? "88" : "63"}/></Link></p>
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