import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./Nav.css";

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Mettez à jour l'état local en fonction de l'URL actuelle
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navPrinc">
      <ul className="navPrinc-ul">
        <li className={`bio ${activeLink === '/bio' ? 'currentLink' : ''}`}>
          <Link to={"/bio"}>Qui est MP ?</Link>
        </li>
        <li className={`projets ${activeLink === '/projets' ? 'currentLink' : ''}`}>
          <Link to={"/projets"}>Projets</Link>
        </li>
        <li className={`contact ${activeLink === '/contact' ? 'currentLink' : ''}`}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
