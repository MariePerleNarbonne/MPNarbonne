import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LesProjets from "./Pages/LesProjets";
import UnProjet from "./Pages/UnProjet";
import Contact from "./Pages/Contact";
import QuiEstMP from "./Pages/QuiEstMP";
import Accueil from "./Pages/Accueil";
import Layout from "./Components/Layout";


const App = () => {
  //Création des routes pour naviguer dans le site.
  //Pour chaque route, on crée un objet. ({path, element})
  const routes = [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true, //Affiche la composante par défaut dans le Outlet.
          element: <Navigate to={"/"} replace />
        },
        {
          path: "/",
          element: <Accueil />
        },
        {
          path: "bio",
          element: <QuiEstMP />
        },
        {
          path: "projets",
          element: <LesProjets />,
          children: [
            {
              path: "projets/:id",
              element: <UnProjet />
            }
          ]
        },
        {
          path: "contact",
          element: <Contact />
        },
      ]
    },
    {
      path: "*",
      //si on écrit quelque chose qui n'exsiste pas, renvoyé à about.
      //replace permet de ne pas garder en historique les routes érronées
      element: <Navigate to="/" replace />
    }];

  //On retourne le routerProvider pour changer de route en route
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
