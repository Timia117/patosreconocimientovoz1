import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Botón hamburguesa. Una vez abierto no aparece el menu 
      //aria-label para accesibilidad
      //aria-expanded indica si el menú está abierto o cerrado
      //aria-controls indica el id del elemento que controla (el menú)
      //className="md:hidden" para que solo se vea en pantallas pequeñas
      */}
      {!open && (
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="menu"
        >
          ☰
        </button>
      )}
      {/* Menú controlado por el estado, hay que pasarle el mismo id que se usa en
          //aria-controls="menu"
          //md:flex: en pantallas grandes no se ve el menú hambuerguesa
      */}
      <nav id="menu" className={`${open ? "block" : "hidden"} md:flex`}>
        <NavLink
          to="/"
          className="contenedor__texto-normal px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2 md:text-lg rounded-md font-medium text-black hover:text-blue-900"
          onClick={() => setOpen(false)}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/patos"
          className="contenedor__texto-normal px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2 md:text-lg rounded-md font-medium text-black hover:text-blue-900"
          onClick={() => setOpen(false)}
        >
          Catálogo
        </NavLink>
      </nav>
    </>
  );
}
export default Nav;
