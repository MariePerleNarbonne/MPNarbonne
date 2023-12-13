import ContactForm from '../Components/Contact/ContactForm';
import ContactMerci from '../Components/Contact/ContactMerci';
import './Contact.css';

const Contact = () => {

    return (
      <section className='contact-container'>
        <ContactForm />
        <ContactMerci />
      </section>
    )
  };
  
  export default Contact;