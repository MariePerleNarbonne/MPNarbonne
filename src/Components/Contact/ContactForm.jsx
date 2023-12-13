import './ContactForm.css';
import Cercles from './Cercles';
import { HiArrowLongDown } from "react-icons/hi2";

const ContactForm = () => {
  
    return (
      <section className='contactForm-container'>
        <h1 className='contactForm-titre'>Contact</h1>
        <Cercles />
        <div className="message-merci">
          <p>Un énorme merci pour l'intérêt que vous portez à travailler avec moi.</p>
          <p>J'ai hâte de plonger dans des projets passionnants à vos côtés!</p>
        </div>
        <p className='form-icone'><HiArrowLongDown size={"70"}/></p>
      </section>
    )
  };
  
  export default ContactForm;