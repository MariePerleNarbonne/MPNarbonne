import "./QuiAccueil.css";
import { Link } from "react-router-dom";
import { FaDribbble } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Photo from "./Photo";

const QuiAccueil = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('Cliquer pour copier');

  const velocity = 25; // Adjust the velocity as needed
  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  const shuffle = (o) => {
    for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  const shuffleText = (element, originalText) => {
    const elementTextArray = [];
    let randomText = [];

    for (let i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt(i));
    }

    const repeatShuffle = (times, index) => {
      if (index === times) {
        element.innerText = originalText;
        return;
      }

      setTimeout(() => {
        randomText = shuffle(elementTextArray);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join('');
        element.innerText = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.innerText.length, 0);
  };

  const handleMouseEnter = () => {
    const employmentText = document.querySelector('.quiAccueil-emploi');
    shuffleText(employmentText, employmentText.innerText);
  };

  const handleMouseLeave = () => {
    const employmentText = document.querySelector('.quiAccueil-emploi');
    employmentText.innerText = 'Designer / Développeuse Web Front End';
  };

  const handleEmailClick = () => {
    const emailText = 'narbonne.mp@gmail.com';
    const textArea = document.createElement('textarea');
    textArea.value = emailText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Update tooltip text to indicate successful copy
    setTooltipText('Courriel copié');

    // Show tooltip for a short duration
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
      // Reset tooltip text after hiding
      setTooltipText('Cliquer pour copier');
    }, 2000); // Adjust the duration as needed
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

    const handleDownload = () => {
      const pdfUrl = '/MP-Narbonne_CV.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'MP-Narbonne_CV.pdf';
      link.click();
    };

  return (
    <section className="quiAccueil-container">
      <span className="quiAccueil-fond"></span>
      <div className="quiAccueil-infos">
        <h2 className="quiAccueil-emploi" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Designer / Développeuse Web Front End
        </h2>
        <p
          className="quiAccueil-email"
          onClick={handleEmailClick}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          style={{ cursor: 'pointer' }}
        >
          {tooltipVisible && <span className="tooltip">{tooltipText}</span>}
          narbonne.mp@gmail.com
        </p>
      </div>
      <Photo />
      <h1 className="quiAccueil-mp">MP</h1>
      <div className="quiAccueil-socials">
        <p className='linkedin merci-i'><Link to="https://www.linkedin.com/in/mp-narbonne/"><FaLinkedinIn size={width >= 750 ? "50" : "40"}/></Link></p>
        <p className='dribbble merci-i'><Link to="https://dribbble.com/MP-Narbonne"><FaDribbble size={width >= 750 ? "70" : "60"}/></Link></p>
        <p className='pinterest merci-i'><Link to="https://www.pinterest.ca/mpnarbonne"><FaPinterest size={width >= 750 ? "70" : "60"}/></Link></p>
      </div>
      <div className="quiAccueil-cv-container">
        <Link className="quiAccueil-cv" onClick={handleDownload}>cv</Link>
        <span className="quiAccueil-cv-barres barre1"></span>
        <span className="quiAccueil-cv-barres barre2"></span>
      </div>
    </section>
  );
};

export default QuiAccueil;
