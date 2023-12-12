import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import HeaderApp from "./Base/HeaderApp";

const Layout = () => {

  return (
    <div className="layout">
      {/* Les différentes vue de l'app seront affichées dans le main ci-dessous */}
      <main>       
        <HeaderApp />
        <Outlet />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Layout;