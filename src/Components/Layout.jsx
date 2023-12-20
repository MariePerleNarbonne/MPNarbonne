import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HeaderApp from "./Base/HeaderApp";
import FooterApp from "./Base/FooterApp";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Faites défiler la page vers le haut lorsque la route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="layout">
      <main>
        <HeaderApp />
        <Outlet />
        <FooterApp />
      </main>
    </div>
  );
};

export default Layout;
