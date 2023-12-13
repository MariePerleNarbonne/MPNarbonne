import './HeaderApp.css';
import Nav from './Nav';
import React from 'react';
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';

const HeaderApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [titleContent, setTitleContent] = useState(<h1 className='header-titre texte'>MP</h1>);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered) {
      setTitleContent(<IoHomeOutline className='header-titre icone' size={'60'} />);
    } else {
      setTitleContent(<h1 className='header-titre texte'>MP</h1>);
    }
  }, [isHovered, titleContent]);
  
    return (
      <header className="headerApp">
        {/* LOGO ici */}
        <Link to={"/"} className='header-titre-lien' onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}>
          {titleContent}
        </Link>

        <Nav></Nav>
      </header>
    )
  };
  
  export default HeaderApp;