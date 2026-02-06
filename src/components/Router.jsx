import Ducks from "../pages/Ducks.jsx";
import Home from "../pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import DuckDetails from "./DuckDetails.jsx";
import MainContent from "./MainContent.jsx";
import Administration from "../pages/Administration.jsx";

import Login from "../pages/Login.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  if (!userLogged) return <Navigate to="/login" replace />;
  return children;
};

/**
 * Router component that defines the application's route structure.
 *
 * Configures all application routes using React Router, including:
 * - Home page (root path)
 * - Ducks listing page
 * - Duck details page (with dynamic ID parameter)
 * - Administration page
 * - Redirect from /inicio to root path
 * - 404 fallback for non-existent routes
 *
 * All routes are nested under the MainContent layout component.
 *
 * @component
 * @returns {JSX.Element} Routes configuration with nested route structure
 */
function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}>
        <Route index element={<Home />} />
        <Route path="inicio" element={<Navigate to="/" replace />} />
        <Route path="patos" element={<Ducks />} />
        <Route path="patos/:id" element={<DuckDetails />} />

        <Route
          path="administration"
          element={
            <PrivateRoute>
              <Administration />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        {/*Por si no existe la pág */}
        <Route
          path="*"
          element={
            <MainContent titulo="Página no encontrada">
              <p>La ruta no existe.</p>
            </MainContent>
          }
        />
      </Route>
    </Routes>
  );
}
export default Router;
