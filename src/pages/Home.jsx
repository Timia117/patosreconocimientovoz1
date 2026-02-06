import { Link } from "react-router-dom";
import CardDuck from "../components/CardDuck";
import Slogan from "../assets/images/Slogan.png";

import { usePatos } from "../hooks/usePatos";

function Home() {
  const { data: patos, loading, error } = usePatos();

  return (
    <>
      {/* Solo visible en pantallas grandes */}
      <section className="hidden sm:relative sm:flex sm:justify-center sm:mb-8">
        <img
          src={Slogan}
          alt="Slogan de Ducklyn"
          className="w-full max-w-[48rem] h-auto object-contain rounded-2xl shadow-xl"
        />

        <section className="absolute inset-0 flex flex-col items-start justify-center px-6 max-w-[48rem] mx-auto">
          <p className="text-white font-bold font-baloo text-xl sm:text-2xl md:text-3xl mb-3 tracking-wider">
            ¡Chapotea con estilo!
          </p>

          <p className="text-white font-bold font-baloo text-xs sm:text-sm md:text-base leading-snug mb-6 tracking-wide">
            En Ducklyn fabricamos nuestros patos con plástico reciclado de alta
            calidad,
            <br />
            son seguros, resistentes y diseñados para durar,
            <br />
            porque creemos que la calidad también puede ser sostenible.
          </p>

          <p>
            <Link
              to="/patos"
              className="w-fit px-4 sm:px-6 bg-[#09207D] text-white font-bold font-baloo py-2 rounded-md shadow-lg hover:bg-[#031a51] transition-colors text-sm sm:text-base tracking-wide"
            >
              Conócenos
            </Link>
          </p>
        </section>
      </section>

      {loading && (
        <section className="flex justify-center items-center h-64 mt-8">
          <p className="contenedor__texto-normal">
            Cargando patos desde la API...
          </p>
        </section>
      )}

      {/* Grid de patos */}
      <section aria-label="Listado de patos destacados" className="grid-patos">
        {!loading &&
          !error &&
          patos.length > 0 &&
          patos.slice(0, 8).map((pato) => (
            <Link
              key={pato.id}
              to={`/patos/${pato.id}`}
              aria-label={`Ver detalles de ${pato.nombre}`}
            >
              <CardDuck
                nombre={pato.nombre}
                foto={pato.imagen}
                descripcion={pato.descripcion}
                precio={pato.precio}
              />
            </Link>
          ))}
      </section>
    </>
  );
}

export default Home;
