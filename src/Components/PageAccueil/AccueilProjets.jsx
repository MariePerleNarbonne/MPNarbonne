import {Link} from 'react-router-dom';

const AccueilProjets = () => {
  return (
    <section className="accueilProjet-container">
      <Link className="accueilProjets-btn">Voir les projets </Link>
      <span className="accueilProjets-barres"></span>
      <div className="accueilProjets-imgContainer">
        <img className="accueilProjets-img accueil-img1" src="" alt="" />
        <img className="accueilProjets-img accueil-img2" src="" alt="" />
        <img className="accueilProjets-img accueil-img3" src="" alt="" />
      </div>
    </section>
  );
};

export default AccueilProjets;
