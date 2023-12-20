import './ProjTech.css';

const ProjTech = ({ icones }) => {
    return (
      <section className="tech">
        <h2 className="tech-titre">Technologies utilisées</h2>
        <div className="tech-icones">
          {icones.map((icone, index) => (
            <p key={index} className="tech-icone">
              {icone}
            </p>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjTech;
  