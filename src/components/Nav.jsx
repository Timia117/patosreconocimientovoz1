import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="flex space-x-4">
      <NavLink
        to="/"
        className="contenedor_texto-normal px-3 py-2 rounded-md text-lg font-medium text-black hover:text-blue-900"
      >
        Inicio
      </NavLink>

      <NavLink
        to="/patos"
        className="contenedor_texto-normal px-3 py-2 rounded-md text-lg font-medium text-black hover:text-blue-900"
      >
        Catálogo
      </NavLink>
    </nav>
  );
}
export default Nav;
