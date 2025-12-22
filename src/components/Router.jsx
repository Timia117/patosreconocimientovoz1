import Ducks from "../pages/Ducks.jsx";
import Home from "../pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import DuckDetails from "./DuckDetails.jsx";
import MainContent from "./MainContent.jsx";
import Administration from "../pages/Administration.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}>
        <Route index element={<Home />} />
        <Route path="inicio" element={<Navigate to="/" replace />} />
        <Route path="patos" element={<Ducks />} />
        <Route path="patos/:id" element={<DuckDetails />} />

        <Route path="administration" element={<Administration />} />

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
export default App;
