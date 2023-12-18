import AccueilHeader from "../Components/PageAccueil/AccueilHeader";
import AccueilProjets from "../Components/PageAccueil/AccueilProjets";
import AccueilMoi from "../Components/PageAccueil/AccueilMoi";

const Accueil = () => {

    return (
      <section className="pageAccueil-container">
        <AccueilHeader />
        <AccueilProjets />
        <AccueilMoi />
      </section>
    )
  };
  
  export default Accueil;