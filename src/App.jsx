import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LesProjets from "./Pages/LesProjets";
import UnProjet from "./Pages/UnProjet";
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
      element: <Navigate to="/" replace />
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
