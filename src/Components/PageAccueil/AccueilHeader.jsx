import "./AccueilHeader.css";

const AccueilHeader = () => {
  return (
    <header className="accueil-header">
      <span className="accueilHeader-barres1"></span>
      <div className="accueilHeader-emploiContainer">
        <h1 className="accueilHeader-titre">MP</h1>
        <p className="accueilHeader-emploi">DESIGNER / DÉVELOPPEUSE <br/> WEB FRONT END</p>
      </div>
      <span className="accueilHeader-barres2"></span>
    </header>
  );
};

export default AccueilHeader;
