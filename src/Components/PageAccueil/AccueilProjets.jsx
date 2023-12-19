import {Link} from 'react-router-dom';
import './AccueilProjets.css';
import { HiArrowLongRight } from "react-icons/hi2";

const AccueilProjets = () => {
  return (
    <section className="accueilProjet-container">
      <div className="accueilProjets-btnWrap">
        <span className="accueilProjets-barres"></span>
        <div className="wraptext-btn">
          <Link className="accueilProjets-btn">
            Voir les projets 
            <HiArrowLongRight size="45"/>
          </Link>
        </div>
      </div>
      <div className="accueilProjets-imgContainer">
        <div className="accueilProjets-imgsWrap">
          <img className="accueilProjets-img accueil-img2" src="/imgs/groovyBeats/Page-Accueil.png" alt="image d'un projet"/>
            <span className='accueil-img2-span'></span>
        </div>
        <div className="accueilProjets-imgsWrap">
          <img className="accueilProjets-img accueil-img3" src="/imgs/agrotourisme/Page-Accueil.png" alt="image d'un projet"/>
            <span className='accueil-img3-span'></span>
        </div>
        <div className="accueilProjets-imgsWrap">
          <img className="accueilProjets-img accueil-img1" src="/imgs/bucheron/Destop-Accueil.png" alt="image d'un projet"/>
            <span className='accueil-img1-span'></span>
        </div>
      </div>
    </section>
  );
};

export default AccueilProjets;
