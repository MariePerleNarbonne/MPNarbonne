import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import "./AccueilMoi.css";

const AccueilMoi = () => {

    return (
      <section className="accueilMoi-container">
        <div className="accueilMoi-barres1">
            <span className="accueilMoi-barres1Hori"></span>
            <span className="accueilMoi-barres1Verti"></span>
        </div>
        <span className="accueilMoi-fond1"></span>
        <Link to={"bio"} className="accueilMoi-btn">
          Qui est MP ?
          <HiArrowLongRight size="45"/>
          </Link>
        <p className="accueilMoi-bio">Enchantée, je suis MP, une créative <span>polyvalente</span> évoluant dans le monde du <span>design</span> et du développement web front end. Mon univers s'étend au-delà des lignes de <span>code</span>, englobant également l'art de l'<span>animation</span> 2D / 3D. Mon parcours professionnel est façonné par une <span>passion</span> ...</p>
        <div className="accueilMoi-imgWrap"><img className="accueilMoi-img" src="/imgs/moi.jpg" alt="" /></div>
        <span className="accueilMoi-fond2"></span>
        <div className="accueilMoi-barres2">
            <span className="accueilMoi-barres2Hori"></span>
            <span className="accueilMoi-barres2Verti"></span>
        </div>
      </section>
    )
  };
  
  export default AccueilMoi;