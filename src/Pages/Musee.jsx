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

const Musee = () => {
  const demandesData = [
    "Les utilisateurs peuvent créer un compte à partir de leurs informations Facebook/Google ou manuellement via un formulaire. ",
    "Le menu de l'application doit présenter les items disponibles.",
    "La commande peut être consultée et modifiée à tout moment, sauf une fois envoyée et payée au camion. ",
    "Après la transaction, un numéro s'affiche, suivi d'une notification informant le client que la commande est en préparation. ",
    "L'application doit offrir une navigation intuitive pour une expérience utilisateur optimale.",
  ];

  const contentClient = "Musée Virtuel, où l'art transcende les frontières physiques pour s'épanouir dans le monde numérique. En tant que pionnier des expositions virtuelles d'œuvres d'art, Musée Virtuel redéfinit l'expérience muséale en offrant un accès sans précédent à des collections exceptionnelles.";

  const technologiesUtilisees = [
    <SiAdobeillustrator size="50"/>,
    <SiAdobephotoshop size="50"/>,
    <SiAdobexd size="50"/>,
    <FaVuejs size="50"/>,
    <DiSass size="50"/>,
    <SiCss3 size="50"/>,
  ];

    return (
      <section>
        <ProjNav />
        <ProjImg classe="buchImg-containerHeader" classeImg="buchImg-img" srcImg="imgs/musee/Desktop_PresOeuvres.png"/>
        <Demandes demandes={demandesData} contentClient={contentClient} />
        <ProjTech icones={technologiesUtilisees}/>
        <div className="museeImg-container">
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Acc" srcImg="imgs/musee/Desktop_PresOeuvres.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Menu" srcImg="imgs/musee/Desktop_UneOeuvre.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Det" srcImg="imgs/musee/Desktop_UneOeuvre_ImgOuverte.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Con" srcImg="imgs/musee/Mobile_PresOeuvres.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg NB" srcImg="imgs/musee/Mobile_UneOeuvre.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="museeImg Fac" srcImg="imgs/musee/Mobile_UneOeuvre_ImgOuverte.png"/>
        </div>
          <Finale lien={"/essence-divine"} nomLien="Essence Divine"/>
      </section>
    )
  };
  
  export default Musee;