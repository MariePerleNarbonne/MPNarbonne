import "./QuiTexte.css";
import { useState } from "react";

const QuiTexte = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // console.log(width);

  const updateSize = () => {
      setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateSize);

    return (
      <section className="quiTexte-container">
          <p className="quiTexte-p p1">Enchantée, je suis MP, une créative polyvalente évoluant dans le monde du design et du développement web front end. Mon univers s'étend au-delà des lignes de code, englobant également l'art de l'animation 2D / 3D. Mon parcours professionnel est façonné par une passion inextinguible pour l'innovation et l'exploration constante de nouvelles technologies. Chaque projet est une opportunité de repousser les limites, d'apprendre et de grandir professionnellement.</p>
          <span className="quiTexte-barres barres1"></span>
          <img className="quiTexte-img img-moi1" src="/imgs/moi.jpg" alt="" />
          <span className="quiTexte-barres barres2"></span>
          <p className="quiTexte-p p2">En dehors de l'écran, vous me trouverez souvent en train de flâner dans les bois, m'inspirant de la nature pour nourrir ma créativité. Les balades en forêt sont pour moi une source d'énergie et d'équilibre, me permettant de revenir à mes projets avec une perspective renouvelée. Si je ne suis pas en train de perfectionner une interface utilisateur, vous me trouverez peut-être en train de déguster un délicieux taco, explorant le monde à travers ses saveurs. </p>
          <span className="quiTexte-barres barres3"></span>
          <div className="imgMoi2">{width>= 768? "" : <img className="quiTexte-img img-moi2" src="/imgs/moi.jpg" alt="" />}</div>
          <p className="quiTexte-p p3">Passionnée par la diversité culturelle, je m'efforce de marier l'esthétique et la fonctionnalité dans chacun de mes projets. Avec une tasse de café à la main et une curiosité infinie, je suis prête à transformer vos idées en expériences visuelles et interactives mémorables.</p>
          <div className="quiTexte-imgBottom">
            <img className="quiTexte-img img-moi3" src="/imgs/moi.jpg" alt="" />
            {width>= 768? <img className="quiTexte-img img-moi4" src="/imgs/moi.jpg" alt="" /> : ""}
          </div>
          <span className="quiTexte-fond"></span>
      </section>
    )
  };
  
  export default QuiTexte;