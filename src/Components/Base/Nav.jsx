import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { BsEnvelopeHeart } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Mettez à jour l'état local en fonction de l'URL actuelle
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const [width, setWidth] = useState(window.innerWidth);
  // console.log(width);

  const updateSize = () => {
      setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateSize);
  const sizeIcone = width <= 392 ? "29" : "40";
  return (
    <nav className="navPrinc">
      <ul className="navPrinc-ul">
        <li className={`bio ${activeLink === '/bio' ? 'currentLink' : ''}`}>
          <Link to={"/bio"}>
            {width >= 768 ? "Qui est MP ?" : <RiAccountPinCircleLine size={sizeIcone}/>}
          </Link>
        </li>
        <li className={`projets ${activeLink === '/projets' ? 'currentLink' : ''}`}>
          <Link to={"/projets"}>
            {width >= 768 ? "Projets" : <GoProjectSymlink size={sizeIcone}/>}
          </Link>
        </li>
        <li className={`contact ${activeLink === '/contact' ? 'currentLink' : ''}`}>
          <Link to={"/contact"}>
            {width >= 768 ? "Contact" : <BsEnvelopeHeart size={sizeIcone}/>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
