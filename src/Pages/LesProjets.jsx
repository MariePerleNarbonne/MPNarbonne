import Projets from "../Components/LesProjets/Projets";
import './LesProjets.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

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


          <Projets linkTo="/bucheron-boreal" nomProj={<>Bûcheron <br/> Boréal</>} mouseOver={() => handleHover("/imgs/bucheron/Destop-Accueil.png")}></Projets>


          <Projets linkTo="/groovy-beats" nomProj={<>Groovy <br/> Beats</>} mouseOver={() => handleHover("/imgs/groovyBeats/Page-Accueil.png")}></Projets>

          <Projets linkTo="/agrotourisme-laurentides" nomProj={<>Agrotourisme <br/> Laurentides</>} mouseOver={() => handleHover("/imgs/agrotourisme/Page-Accueil.png")}></Projets>
        

          <Projets linkTo="/essence-divine" nomProj={<>Essence<br/>Divine</>} mouseOver={() => handleHover("/imgs/musee/Desktop_PresOeuvres.png")}></Projets>
      </section>
    )
  };
  
  export default LesProjets;