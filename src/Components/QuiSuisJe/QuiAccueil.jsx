import "./QuiAccueil.css";
import { Link } from "react-router-dom";
import { FaDribbble } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react';
import Photo from "./Photo";

const QuiAccueil = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateSize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    return (
      <section className="quiAccueil-container">
        <span className="quiAccueil-fond"></span>
        <div className="quiAccueil-infos">
            <h2 className="quiAccueil-emploi">Designer / Développeuse Web Front End</h2>
            <p className="quiAccueil-email">narbonne.mp@gmail.com</p>
        </div>
        <Photo />
        <h1 className="quiAccueil-mp">MP</h1>
        <div className="quiAccueil-socials">
            <p className='linkedin merci-i'><Link to="https://www.linkedin.com/in/mp-narbonne/"><FaLinkedinIn size={width >= 750 ? "50" : "40"}/></Link></p>
            <p className='dribbble merci-i'><Link to="https://dribbble.com/MP-Narbonne"><FaDribbble size={width >= 750 ? "70" : "60"}/></Link></p>               
            <p className='pinterest merci-i'><Link to="https://dribbble.com/MP-Narbonne"><FaPinterest size={width >= 750 ? "70" : "60"}/></Link></p>   
        </div>
        <div className="quiAccueil-cv-container">
            <Link className="quiAccueil-cv">cv</Link>
            <span className="quiAccueil-cv-barres barre1"></span>
            <span className="quiAccueil-cv-barres barre2"></span>
        </div>
      </section>
    )
  };
  
  export default QuiAccueil;

