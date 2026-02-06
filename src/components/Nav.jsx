import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../context/UserContext";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const { userLogged, logout } = useContext(UserContext);

  return (
    <nav className="relative" aria-label="Menú principal">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-black px-2 py-1 rounded md:hidden"
        aria-controls="menuMovil"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <ul
          id="menuMovil"
          className="absolute top-full left-1/2 -translate-x-1/2 w-full bg-[rgba(255,236,58,1)] z-50 flex flex-col items-center gap-6 px-10 py-10 rounded-lg shadow-xl md:hidden"
        >
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/patos" onClick={() => setIsOpen(false)}>
              Catálogo
            </NavLink>
          </li>
          <li>
            <NavLink to="/administration" onClick={() => setIsOpen(false)}>
              Admin
            </NavLink>
          </li>
          {!userLogged && (
          
          <li>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
          </li>
          )}
          
          {userLogged && (
            <li>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="btn px-3 py-1 text-sm"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}

      <ul className="hidden md:flex gap-4">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/patos">Catálogo</NavLink>
        </li>
        <li>
          <NavLink to="/administration">Admin</NavLink>
        </li>
        <li>
          <NavLink>
            {userLogged && (
              <button
                onClick={() => {
                  logout();
                }}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 block mt-4 md:mt-0"
              >
                Logout
              </button>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
