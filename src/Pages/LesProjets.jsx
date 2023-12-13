import Projets from "../Components/LesProjets/Projets";
import './LesProjets.css';
import React, { useState } from 'react';

const LesProjets = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleHover = (imagePath) => {
    setBackgroundImage(imagePath);
  };

  const handleLeave = () => {
    setBackgroundImage(null);
  };

    return (
      <section className="lesProjets-container" style={{ backgroundImage: `url(${backgroundImage})` }} onMouseLeave={handleLeave}>
        <Projets nomProj={<>Agrotourisme <br/> Laurentides</>} mouseOver={() => handleHover("/public/imgs/agrotourisme/Page-Accueil.png")}></Projets>
        <Projets nomProj={<>Bûcheron <br/> Boréal</>} mouseOver={() => handleHover("/public/imgs/bucheron/Destop-Accueil.png")}></Projets>
        <Projets nomProj={<>Groovy <br/> Beats</>} mouseOver={() => handleHover("/public/imgs/groovyBeats/Page-Accueil.png")}></Projets>
        <Projets nomProj={<>Origami-<br/>manie</>} mouseOver={() => handleHover("/public/imgs/origami/narm1253651_orgamimanie.jpg")}></Projets>
      </section>
    )
  };
  
  export default LesProjets;