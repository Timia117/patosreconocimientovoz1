import FormInput from "./FormInput";

/**
 * FormPhone - Mobile 2-step form for creating or editing duck entries
 *
 * @component
 * This component renders the mobile version of the duck creation form.
 * It splits the form into two steps:
 *
 *  STEP 1 → nombre, precio, categoría
 *  STEP 2 → imagen, detalles, descripción
 *
 * Validation for step 1 is handled in the parent component (Form),
 * while step 2 validation is handled locally through validarPaso2().
 *
 * The component receives all form state and handlers from the parent,
 * ensuring consistent validation, error handling, and focus behavior.
 *
 * @param {Object} props
 * @param {number} props.siguiente - Current mobile step (1 or 2)
 * @param {Function} props.setSiguiente - Updates the current step
 *
 * @param {Object} props.duckData - Duck form data
 * @param {string} props.duckData.nombre - Duck name
 * @param {string} props.duckData.precio - Duck price
 * @param {string} props.duckData.categoria - Duck category
 * @param {string} props.duckData.imagen - Duck image URL
 * @param {string} props.duckData.detalles - Short details
 * @param {string} props.duckData.descripcion - Long description
 *
 * @param {Object} props.duckErrors - Validation errors for each field
 * @param {Function} props.setDuckErrors - Updates error state
 *
 * @param {string[]} props.categorias - List of available categories
 *
 * @param {Function} props.handleDuckChange - Updates form fields and clears errors
 * @param {Function} props.handlePaso1 - Validates step 1 and moves to step 2
 *
 * @returns {JSX.Element} Mobile 2-step form layout
 */

function FormPhone({
  siguiente,
  setSiguiente,
  duckData,
  duckErrors,
  setDuckErrors,
  categorias,
  handleDuckChange,
  handlePaso1,
  handleFileChange,
  fileInputRef,
  loading,
  error,
}) {
  const validarPaso2 = () => {
    const errores = {};

    if (!duckData.detalles.trim() || duckData.detalles.length < 5) {
      errores.detalles =
        "Los detalles son obligatorios y deben haber mín 5 carácteres..";
    }
    if (!duckData.descripcion.trim() || duckData.descripcion.length < 20) {
      errores.descripcion =
        "La descripción es obligatoria y debe tener un mín de 20 carácteres.";
    }

    return errores;
  };

  return (
    <fieldset className="space-y-6">
      {siguiente === 1 && (
        <fieldset className="space-y-4">
          <FormInput
            nombre="Pato nombre *"
            id="nombre"
            type="text"
            placeholder="Ingresa el nombre del pato"
            value={duckData.nombre}
            onChange={handleDuckChange}
            autoComplete="name"
            error={duckErrors.nombre}
            errorId="error-nombre"
          />

          <FormInput
            nombre="Precio *"
            id="precio"
            type="number"
            placeholder="Ej: 5.99"
            value={duckData.precio}
            onChange={handleDuckChange}
            autoComplete="price"
            error={duckErrors.precio}
            errorId="error-precio"
          />

          <fieldset>
            <label htmlFor="categoria" className="contenedor__texto-largo">
              Categoría *
            </label>
            <select
              id="categoria"
              value={duckData.categoria}
              onChange={handleDuckChange}
              autoComplete="category"
              className={`mt-1 block w-full p-2 border ${
                duckErrors.categoria ? "input-error" : "border-gray-300"
              } rounded-md`}
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {duckErrors.categoria && (
              <p className="text-red-600 text-sm">{duckErrors.categoria}</p>
            )}
          </fieldset>

          <button type="button" onClick={handlePaso1} className="btn">
            Siguiente
          </button>
        </fieldset>
      )}

      {siguiente === 2 && (
        <fieldset className="space-y-4">
          {/* Poner la imagen*/}
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="imagen" className="contenedor__texto-largo">
              Imagen
            </label>
            <input
              ref={fileInputRef}
              id="imagen"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 rounded-md" // ← sin border
            />
            {duckErrors.imagen && (
              <p id="error-imagen" className="mt-1 text-sm text-red-600">
                {duckErrors.imagen}
              </p>
            )}
          </fieldset>

          <FormInput
            nombre="Detalles *"
            id="detalles"
            type="text"
            placeholder="Breve descripción del pato"
            value={duckData.detalles}
            onChange={handleDuckChange}
            autoComplete="off"
            error={duckErrors.detalles}
            errorId="error-detalles"
          />

          <fieldset>
            <label className="contenedor__texto-largo">Descripción *</label>
            <textarea
              id="descripcion"
              required
              value={duckData.descripcion}
              placeholder="Descripción detallada del pato"
              onChange={handleDuckChange}
              autoComplete="off"
              rows="4"
              minLength={20}
              className={`mt-1 block w-full p-2 border ${
                duckErrors.descripcion ? "input-error" : "border-gray-300"
              } rounded-md`}
            />
            {duckErrors.descripcion && (
              <p className="text-red-600 text-sm">{duckErrors.descripcion}</p>
            )}
          </fieldset>

          <fieldset className="flex gap-2">
            <button
              type="button"
              onClick={() => setSiguiente(1)}
              className="btn"
            >
              Atrás
            </button>
            <button
              type="submit"
              disabled={loading}
              onClick={() => {
                const errores = validarPaso2();
                if (Object.keys(errores).length > 0) {
                  setDuckErrors(errores);
                }
              }}
              className="btn"
            >
              {loading ? "Añadiendo..." : "Añadir pato"}
            </button>
          </fieldset>
           {error && (
              <p role="alert" className="text-red-600 text-sm">
                {error}
              </p>
            )}
        </fieldset>
      )}
    </fieldset>
  );
}

export default FormPhone;
