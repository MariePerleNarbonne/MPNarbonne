import {Link} from 'react-router-dom';
import './AccueilProjets.css';

const AccueilProjets = () => {
  return (
    <section className="accueilProjet-container">
      <Link className="accueilProjets-btn">Voir les projets </Link>
      <span className="accueilProjets-barres"></span>
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
