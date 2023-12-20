import './Musee.css';

import ProjImg from "../Components/UnProjet/ProjImg";
import ProjNav from "../Components/UnProjet/ProjNav";
import Demandes from "../Components/UnProjet/Demandes";
import ProjTech from "../Components/UnProjet/ProjTech";
import Finale from "../Components/UnProjet/Finale";

import { FaVuejs } from "react-icons/fa6";
import { DiSass } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

const Agrotourisme = () => {
  const demandesData = [
    "La plateforme doit être facile d’utilisation autant en ce qui concerne la recherche d’artisans, de producteurs ou de commerçants .",
    "Sur le plan visuel, la plateforme doit être attrayante et avoir un look professionnel .",
    "L’expérience utilisateur doit être enrichie sur le plan des interactions .",
    "L’interaction avec la plateforme doit être conviviale .",
    "La plateforme doit avoir un contenu qui est accessible .",
    "Le visuel de la plateforme doit répondre aux principes d’ergonomie.",
  ];

  const contentClient = "	Tourisme Laurentides souhaite lancer une plateforme dédiée au tourisme agroalimentaire afin de mettre à l’avant-plan les différents artisans et acteurs de ce secteur touristique en pleine effervescence au Québec. L’organisme vous annonce le lancement d’Agrotourisme Laurentides. Il s’agit d’une sous-division chapeautée par Tourisme Laurentides afin de se concentrer exclusivement au développement de ce type de tourisme dans la région.";

  const technologiesUtilisees = [
    <SiAdobeillustrator size="50"/>,
    <SiAdobephotoshop size="50"/>,
    <SiAdobexd size="50"/>,
    <FaVuejs size="50"/>,
    <DiSass size="50"/>,
    <SiCss3 size="50"/>,
  ];
    return (
      <section className="agro-container">
        <ProjNav />
        <ProjImg classe="buchImg-containerHeader" classeImg="buchImg-img" srcImg="imgs/agrotourisme/Page-Accueil.png"/>
        <Demandes demandes={demandesData} contentClient={contentClient} />
        <ProjTech icones={technologiesUtilisees}/>
        <div className="museeImg-container">
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Acc" srcImg="imgs/agrotourisme/1.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Menu" srcImg="imgs/agrotourisme/2.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Det" srcImg="imgs/agrotourisme/3.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Con" srcImg="imgs/agrotourisme/4.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg NB" srcImg="imgs/agrotourisme/5.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Fac" srcImg="imgs/agrotourisme/6.png"/>
        </div>
          <Finale lien={"/agrotourisme-laurentides"} nomLien="Agrotourisme Laurentides"/>
      </section>
    )
  };
  
  export default Agrotourisme;