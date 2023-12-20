import './Bucheron.css';

import ProjImg from "../Components/UnProjet/ProjImg";
import ProjNav from "../Components/UnProjet/ProjNav";
import Demandes from "../Components/UnProjet/Demandes";
import ProjTech from "../Components/UnProjet/ProjTech";
import Finale from "../Components/UnProjet/Finale";

import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

const Groovy = () => {
  const demandesData = [
    " Une interface utilisateur simple, élégante et conviviale, favorisant une navigation fluide et intuitive.",
    "La possibilité pour les utilisateurs de partager leurs listes de lecture, de suivre les activités musicales de leurs amis, et de créer une communauté autour de la passion commune pour la musique.",
    "Intégration de technologies audio de pointe pour assurer une qualité sonore exceptionnelle, offrant une expérience d'écoute immersive. ",
    "L'application sera disponible sur les principales plateformes mobiles (iOS, Android) pour garantir une accessibilité maximale.",
  ];

  const contentClient = "Groovy Beats est une entreprise innovante spécialisée dans la diffusion de musique en ligne. En tant que plateforme de streaming, Groovy Beats s'est imposée comme une destination incontournable pour les amateurs de musique du monde entier. La société se distingue par sa vaste bibliothèque musicale, comprenant une large gamme de genres allant de la musique électronique aux classiques, offrant ainsi une expérience musicale diversifiée à ses utilisateurs.";

  const technologiesUtilisees = [
    <SiAdobeillustrator size="50"/>,
    <SiAdobephotoshop size="50"/>,
    <SiAdobexd size="50"/>,
    <SiReact size="50"/>,
    <SiTailwindcss size="50"/>,
    <SiCss3 size="50"/>,
  ];

  return (
    <section className="groovy-container">
        <ProjNav />
        <ProjImg classe="buchImg-containerHeader" classeImg="buchImg-img" srcImg="imgs/groovyBeats/Page-Accueil.png"/>
        <Demandes demandes={demandesData} contentClient={contentClient} />
        <ProjTech icones={technologiesUtilisees}/>
        <div className="museeImg-container">
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg" srcImg="imgs/groovyBeats/Accueil-desk.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg" srcImg="imgs/groovyBeats/Dash-desk.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg" srcImg="imgs/groovyBeats/Menu-desk.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg" srcImg="imgs/groovyBeats/Accueil-mobile.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg" srcImg="imgs/groovyBeats/Dash-mobile.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg" srcImg="imgs/groovyBeats/Menu-mobile.png"/>
        </div>
          <Finale lien={"/groovy-beats"} nomLien="Groovy Beats"/>
      </section>
  )
};

export default Groovy;