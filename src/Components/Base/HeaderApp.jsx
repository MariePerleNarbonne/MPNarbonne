import './HeaderApp.css';
import Nav from './Nav';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';

const HeaderApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  // Use useMemo to create the JSX element
  const titleContent = useMemo(() => {
    if (isHovered) {
      return <IoHomeOutline className='header-titre icone' size={'60'} />;
    } else {
      return <h1 className='header-titre texte'>MP</h1>;
    }
  }, [isHovered]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    console.log('isHovered:', isHovered);
  }, [isHovered]);

  return (
    <header className='headerApp'>
      <Link to={'/'} className='header-titre-lien' onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
        {titleContent}
      </Link>

      <Nav />
    </header>
  );
};

export default HeaderApp;
