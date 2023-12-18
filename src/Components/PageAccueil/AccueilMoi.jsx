import { Link } from "react-router-dom";

const AccueilMoi = () => {

    return (
      <section className="accueilMoi-container">
        <span className="accueilMoi-fond1"></span>
        <div className="accueilMoi-barres">
            <span className="accueilMoi-barresHori"></span>
            <span className="accueilMoi-barresVerti"></span>
        </div>
        <Link className="accueilMoi-btn">Qui est MP ?</Link>
        <img className="accueilMoi-img" src="" alt="" />
        <p className="accueilMoi-bio">Enchantée, je suis MP, une créative polyvalente évoluant dans le monde du design et du développement web front end. Mon univers s'étend au-delà des lignes de code, englobant également l'art de l'animation 2D / 3D. Mon parcours professionnel est façonné par une passion <br/> ...</p>
        <span className="accueilMoi-fond2"></span>
        <div className="accueilMoi-barres">
            <span className="accueilMoi-barresHori"></span>
            <span className="accueilMoi-barresVerti"></span>
        </div>
      </section>
    )
  };
  
  export default AccueilMoi;