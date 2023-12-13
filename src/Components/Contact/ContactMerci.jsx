import './ContactMerci.css';
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineDribbbleSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ContactMerci = () => {

    return (
      <section className='contactMerci-container'>
            <p className='merci-email'>narbonne.mp@gmail.com</p>
            <div className="merci-icones">
              <p className='linkedin merci-i'><Link to="https://www.linkedin.com/in/mp-narbonne/"><GrLinkedin size={"40"}/></Link></p>
              <p className='dribbble merci-i'><Link to="https://dribbble.com/MP-Narbonne"><AiOutlineDribbbleSquare size={"50"}/></Link></p>
            </div>
            <div className="merci-signature">
              <p>MP</p>
            </div>
      </section>
    )
  };
  
  export default ContactMerci;