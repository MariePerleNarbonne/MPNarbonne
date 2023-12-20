import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LesProjets from "./Pages/LesProjets";
import Bucheron from "./Pages/Bucheron";
import Musee from "./Pages/Musee";
import Agrotourisme from "./Pages/Agrotourisme";
import Groovy from "./Pages/Groovy";
import Contact from "./Pages/Contact";
import QuiEstMP from "./Pages/QuiEstMP";
import Accueil from "./Pages/Accueil";
import Layout from "./Components/Layout";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Accueil />
        },
        {
          path: "bio",
          element: <QuiEstMP />
        },
        {
          path: "projets",
          element: <LesProjets />
        },
        {
          path: "bucheron-boreal",
          element: <Bucheron />
        },
        {
          path: "essence-divine",
          element: <Musee />
        },
        {
          path: "agrotourisme-laurentides",
          element: <Agrotourisme />
        },
        {
          path: "groovy-beats",
          element: <Groovy />
        },
        {
          path: "contact",
          element: <Contact />
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
