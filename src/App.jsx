import Patos from "./pages/Patos.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import {Routes , Route} from "react-router-dom";
import ContenidoPrincipal from "./pages/ContenidoPrincipal.jsx"; 
import DetallesPato from "./pages/DetallesPato.jsx";
import Footer from "./components/Footer.jsx";
/**
 * Componente principal de la aplicación
 */
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContenidoPrincipal />}>
          <Route index element={<Home />} />
          <Route path="inicio" element={<Home />} />
          <Route path="patos" element={<Patos />} />
          <Route path="patos/:id" element={<DetallesPato />} />
          <Route
            path="*"
            titulo="Contenido no encontrado"
            element={<p>La página que buscas no existe</p>}
          />
        </Route>
      </Routes>
      
      <Footer />

    </>
  );
}

export default App;
