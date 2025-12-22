import Header from "./components/Header.jsx";
import Router from "./components/Router.jsx";
import Footer from "./components/Footer.jsx";
/**
 * Componente principal de la aplicación
 * @returns  Devuelve la estructura base de la aplicación
 */
function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
