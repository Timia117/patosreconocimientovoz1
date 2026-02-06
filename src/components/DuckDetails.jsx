import { useParams, useNavigate, useLocation } from "react-router-dom";

import { usePato } from "../hooks/usePato";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useDeletePato } from "../hooks/useDeletePato";

/**
 * DuckDetails component - Displays detailed information about a specific duck
 *
 * This component fetches a duck's data based on the URL parameter (id) and renders
 * its complete information including name, image, category, description, price, and details.
 *
 * @component
 * @returns {JSX.Element} A detailed view of a duck with image, description, and navigation
 *
 * @example
 * // Route: /duck/:id
 * <DuckDetails />
 *
 * @throws {JSX.Element} Returns "Pato no encontrado" message if duck is not found
 */
function DuckDetails() {
  const { userLogged } = useContext(UserContext);
  const { deletePato } = useDeletePato();

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();


 {/* Para borrar al pato */}
  const handleDelete = async () => {
    const success = await deletePato(id);
    if (success) {
      navigate("/patos");
    }
  };


  //Obtener el pato pasado por el link
  const patoDesdeDucks = location.state?.pato;

  //Usar el pato pasado o cargarlo desde la API
  const {
    pato: patoDesdeAPI,
    loading,
    error,
  } = usePato(patoDesdeDucks ? null : id);

  //Se decide qué pato usar
  const pato = patoDesdeDucks || patoDesdeAPI;

  if (loading && !patoDesdeDucks) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  if (error && !patoDesdeDucks) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error al cargar el pato: {error.message}
      </p>
    );
  }

  
  if (!pato) {
    return <p>Pato no encontrado</p>;
  }

  const tieneImagen = Boolean(pato.imagen);

  return (
    <article className="max-w-2xl mx-auto p-4 space-y-4">
      <header>
        <h1 className="contenedor__titulo">{pato.nombre}</h1>
      </header>

      <figure className="text-center">
        {tieneImagen ? (
          <img
            src={pato.imagen}
            alt={`Imagen de ${pato.nombre}`}
            className="mx-auto w-64 h-auto rounded"
          />
        ) : (
          <figcaption className="text-gray-500 text-center p-4">
            Sin imagen disponible
          </figcaption>
        )}
      </figure>

      <section>
        <p className="contenedor__texto-largo !font-bold">{pato.categoria}</p>
        <p className="contenedor__texto-largo">{pato.descripcion}</p>
        <p className="contenedor__precio !text-base">{pato.precio} €</p>
      </section>

      <section className="flex gap-9">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#09207d] text-white rounded"
        >
          Volver
        </button>

        {userLogged && (
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Eliminar pato
          </button>
        )}
      </section>
      <section>
        <p className="contenedor__texto-normal">{pato.detalles}</p>
      </section>
    </article>
  );
}
export default DuckDetails;
