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

const Bucheron = () => {
  const demandesData = [
    "Les utilisateurs peuvent créer un compte à partir de leurs informations Facebook/Google ou manuellement via un formulaire. ",
    "Le menu de l'application doit présenter les items disponibles.",
    "La commande peut être consultée et modifiée à tout moment, sauf une fois envoyée et payée au camion. ",
    "Après la transaction, un numéro s'affiche, suivi d'une notification informant le client que la commande est en préparation. ",
    "L'application doit offrir une navigation intuitive pour une expérience utilisateur optimale.",
  ];

  const contentClient = "Le foodtruck, Le Bûcheron Boréal Gastronomie rustique, opère lors de festivals provinciaux et dans les rues de la métropole pendant l'été, les propriétaires ont identifié un problème majeur lié à la prise des commandes et cherchent une solution \"2.0\" pour faciliter les transactions à proximité du camion.";

  const technologiesUtilisees = [
    <SiAdobeillustrator size="50"/>,
    <SiAdobephotoshop size="50"/>,
    <SiAdobexd size="50"/>,
    <SiReact size="50"/>,
    <SiTailwindcss size="50"/>,
    <SiCss3 size="50"/>,
  ];

    return (
      <section className='BucheronPage'>
        <ProjNav />
        <ProjImg classe="buchImg-containerHeader" classeImg="buchImg-img" srcImg="imgs/bucheron/Destop-Accueil.png"/>
        <Demandes demandes={demandesData} contentClient={contentClient} />
        <ProjTech icones={technologiesUtilisees}/>
        <div className="buchImg-container">
          <ProjImg classe="buchui-imgContainer" classeImg="buchImg-img-Acc" srcImg="imgs/bucheron/Accueil.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="buchImg-img-Menu" srcImg="imgs/bucheron/Menu.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="buchImg-img-Det" srcImg="imgs/bucheron/Details.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="buchImg-img-Con" srcImg="imgs/bucheron/Connexion.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="buchImg-img-Fac" srcImg="imgs/bucheron/Facture.png"/>
          <ProjImg classe="buchui-imgContainer" classeImg="buchImg-img-NB" srcImg="imgs/bucheron/Numero.png"/>
        </div>
          <Finale lien={"/bucheron-boreal"} nomLien="Le Bûcheron Boréal"/>
      </section>
    )
  };
  
  export default Bucheron;