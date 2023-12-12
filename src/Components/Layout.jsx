import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Layout = () => {

  return (
    <div className="layout">
      {/* Les différentes vue de l'app seront affichées dans le main ci-dessous */}
      <main>       
        {/* <MiniHeader /> */}
        <Outlet />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Layout;