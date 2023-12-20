import './Finale.css';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";

const Finale = ({lien, nomLien}) => {

    return (
      <section className="finale-container">
        <h2 className="finale-titre">Version finale</h2>
        <Link to={lien} className='finale-lien'>{nomLien} <HiArrowLongRight size="45"/></Link>
        <span className="finale-barres"></span>
      </section>
    )
  };
  
  export default Finale;