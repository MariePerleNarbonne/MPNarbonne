import './Projets.css';
const Projets = ({nomProj ,mouseOver}) => {


    return (
      <section className="show-projet" onMouseOver={mouseOver}>
        <h2 className="nomProj" onMouseOver={mouseOver}>{nomProj}</h2>
      </section>
    )
  };
  
  export default Projets;