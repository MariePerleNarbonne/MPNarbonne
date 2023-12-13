import Projets from "../Components/LesProjets/Projets";
import './LesProjets.css';

const LesProjets = () => {

    return (
      <section className="lesProjets-container">
        <Projets nomProj="Agrotourisme Laurentides"></Projets>
        <Projets nomProj="Bûcheron Boréal"></Projets>
        <Projets nomProj="Groovy Beats"></Projets>
        <Projets nomProj="Origami-manie"></Projets>
      </section>
    )
  };
  
  export default LesProjets;