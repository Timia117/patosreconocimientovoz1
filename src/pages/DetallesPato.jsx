import { useParams, useNavigate } from "react-router-dom";
import ducklyns from "../data/ducklyn";

function DetallesPato() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pato = ducklyns.find((pato) => pato.id === parseInt(id));
  if (!pato) {
    return <p>Pato no encontrado</p>;
  }
  return (
    <>
      <article>
        {/*Para que el boton este a la misma altura del titulo*/}
        <section className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{pato.nombre}</h1>
          <button
            onClick={() => navigate("/patos")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Volver
          </button>
        </section>

        {/*Centrar la imagen (mx-auto) y el texto */}
        <section className="text-center">
          <img
            src={pato.imagen}
            alt={`Imagen de ${pato.nombre}`}
            className="mx-auto"
          />
          {/* Bloque informativo del pato */}
          <h3 className="font-heading-h5 font-(--heading-h5-font-weight) text-color-black-1 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
            <strong>{pato.nombre}</strong>
          </h3>
          <p className="contenedor__texto-normal">{pato.descripcion}</p>
          <p className="contenedor__texto-normal">{pato.categoria}</p>
          <p className="contenedor__precio">{pato.precio}</p>
          <p className="contenedor__texto-largo">{pato.detalles}</p>
        </section>
      </article>
    </>
  );
}
export default DetallesPato;
