import Header from "./components/Header.jsx";
import Router from "./components/Router.jsx";
import Footer from "./components/Footer.jsx";
import { UserProvider } from "./context/UserContext";

/**
 * Componente principal de la aplicación
 * @returns  Devuelve la estructura base de la aplicación
 */
function App() {
  return (
    <UserProvider>
      <Header /> 
      <Router /> 
      <Footer />
    </UserProvider>
  );
}
export default App;