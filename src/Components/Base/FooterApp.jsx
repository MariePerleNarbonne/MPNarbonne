import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPinterestSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineDribbbleSquare } from "react-icons/ai";
import './FooterApp.css';
import { useState } from 'react';

const FooterApp = () => {
  const velocity = 50;

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

  useEffect(() => {
    const footerLinks = document.querySelectorAll('.footer-lien a');

    footerLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        shuffleText(link, link.innerText);
      });
    });
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = () => {
      setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateSize);
  const sizeLinked = width >= 998 ? "50" : "40";
  const sizeDrib = width >= 998 ? "62" : "52";
  const sizePin = width >= 998 ? "55" : "45";

  const handleDownload = () => {
    const pdfUrl = '/public/MP-Narbonne_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'MP-Narbonne_CV.pdf';
    link.click();
  };

  return (
    <footer className="footerApp">
      <div className="footer-titre">
        <h1 className='footer-mp'>MP</h1>
        <p className="footer-carriere">Designer / Développeuse Web Front End</p>
      </div>
      <div className="footer-lien">
        <Link className='footer-cv' onClick={handleDownload}>CV</Link>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/bio"}>Qui est MP ?</Link>
        <Link to={"/projets"}>Projets</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="footer-socials">
        <Link to="https://www.linkedin.com/in/mp-narbonne/"><GrLinkedin size={sizeLinked} /></Link>
        <Link to="https://dribbble.com/MP-Narbonne"><AiOutlineDribbbleSquare size={sizeDrib} /></Link>
        <Link to="https://www.pinterest.ca/mpnarbonne"><FaPinterestSquare size={sizePin} /></Link>
      </div>
    </footer>
  );
};

export default FooterApp;
