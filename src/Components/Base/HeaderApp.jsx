import './HeaderApp.css';
import Nav from './Nav';
import React from 'react';

const HeaderApp = () => {

    return (
      <header className="headerApp">
        {/* LOGO ici */}
        <h1 className='header-titre'>MP</h1>

        <Nav></Nav>
      </header>
    )
  };
  
  export default HeaderApp;