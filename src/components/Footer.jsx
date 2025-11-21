import logo from "../assets/images/Pato.png";

function Footer() {
  return (
    <footer className="contenedor__barra-principal">
      <article className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center px-4">
        {/*Ocultar en pantallas pequeñas */}
        <section className="hidden sm:block">
          <h3 className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
        </section>

        <section className="hidden sm:block">
          <h3 className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
        </section>

        <section >
          <h3 className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
          {/* Logo (lo he metido aquí porque no lo conseguí que se quedara bien de otra forma) */}
          <section className="flex flex-col items-end">
            <img
              src={logo}
              alt="Logo de Ducklyn"
              className="w-17 h-17 object-contain mt-[-70px]"
            />
          </section>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
