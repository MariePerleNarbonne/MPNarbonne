import './FooterApp.css';
import { Link } from 'react-router-dom';
import { FaPinterestSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineDribbbleSquare } from "react-icons/ai";

const FooterApp = () => {

    return (
      <footer className="footerApp">
        <div className="footer-titre">
            <h1 className='footer-mp'>MP</h1>
            <p className="footer-carriere">Designer / Développeuse Web Front End</p>
        </div>
        <div className="footer-lien">
            <Link>Accueil</Link>
            <Link>Qui est MP ?</Link>
            <Link>Projets</Link>
            <Link>Contact</Link>
        </div>
        <div className="footer-socials">
            <Link><GrLinkedin size={"40"}/></Link>
            <Link><AiOutlineDribbbleSquare size={"52"}/></Link>
            <Link><FaPinterestSquare size={"45"} /></Link>
        </div>
      </footer>
    )
  };
  
  export default FooterApp;