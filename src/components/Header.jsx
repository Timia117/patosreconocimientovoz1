import Nav from "./Nav.jsx";
import logo from "../assets/images/Pato.png";

function Header() {
  return (
    <header className="contenedor__barra-principal py-6 ">
      <article className="mx-auto flex justify-between items-center px-4">
        {/* Logo + Marca */}
        <section className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de Ducklyn"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
          />

          <section>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide leading-tight">
              Ducklyn
            </h1>
            <p className="text-xs sm:text-sm lg:text-base font-extrabold text-black leading-none">
              Tu patito favorito
            </p>
          </section>
        </section>
        <Nav />
      </article>
    </header>
  );
}

export default Header;
