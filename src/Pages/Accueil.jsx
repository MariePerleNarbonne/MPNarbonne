import AccueilHeader from "../Components/PageAccueil/AccueilHeader";
import AccueilProjets from "../Components/PageAccueil/AccueilProjets";
import AccueilMoi from "../Components/PageAccueil/AccueilMoi";

const Accueil = () => {

    return (
      <section className="pageAccueil-container">
        <AccueilHeader />
        <AccueilMoi />
        <AccueilProjets />
      </section>
    )
  };
  
  export default Accueil;