import './ProjImg.css';

const ProjImg = ({classe, classeImg, srcImg}) => {

    return (
      <section className={`img-container ${classe}`}>
        <img className={`ProjImg ${classeImg}`} src={srcImg} alt="" />
      </section>
    )
  };
  
  export default ProjImg;