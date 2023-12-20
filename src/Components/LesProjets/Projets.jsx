import './Projets.css';
import { Link } from "react-router-dom";

const Projets = ({nomProj ,mouseOver, linkTo}) => {


    return (
      <section className="show-projet" onMouseOver={mouseOver}>
          <Link to={linkTo}>
            <h2 className="nomProj" onMouseOver={mouseOver}>{nomProj}</h2>
          </Link>
      </section>
    )
  };
  
  export default Projets;