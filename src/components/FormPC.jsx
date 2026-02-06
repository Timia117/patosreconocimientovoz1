import FormInput from "./FormInput";
/**
 * FormPC - Form component for adding or editing duck entries
 *
 * @component
 * A form component that collects duck product information including name, price,
 * category, image URL, short details, and detailed description. Displays validation
 * errors for each field and disables submission when errors are present.
 *
 * @param {Object} props - Component props
 * @param {Object} props.duckData - Object containing the duck form data
 * @param {string} props.duckData.nombre - Duck name
 * @param {number} props.duckData.precio - Duck price
 * @param {string} props.duckData.categoria - Duck category
 * @param {string} props.duckData.imagen - Duck image URL
 * @param {string} props.duckData.detalles - Short details about the duck
 * @param {string} props.duckData.descripcion - Detailed description of the duck
 * @param {Object} props.duckErrors - Object containing validation errors for each field
 * @param {string} [props.duckErrors.nombre] - Error message for name field
 * @param {string} [props.duckErrors.precio] - Error message for price field
 * @param {string} [props.duckErrors.categoria] - Error message for category field
 * @param {string} [props.duckErrors.imagen] - Error message for image field
 * @param {string} [props.duckErrors.detalles] - Error message for details field
 * @param {string} [props.duckErrors.descripcion] - Error message for description field
 * @param {string[]} props.categorias - Array of available category options
 * @param {Function} props.handleDuckChange - Callback function to handle input changes
 *
 * @returns {JSX.Element} Form section with input fields, select dropdown, textarea, and submit button
 */
function FormPC({
  duckData,
  duckErrors,
  categorias,
  handleDuckChange,
  handleFileChange,
  fileInputRef,
  loading,
  error
}) {
  return (
    <fieldset className="space-y-4">
      <FormInput
        nombre="Pato nombre *"
        id="nombre"
        type="text"
        value={duckData.nombre}
        placeholder="Ingresa el nombre del pato"
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
          aria-invalid={!!duckErrors.categoria}
          aria-describedby={
            duckErrors.categoria ? "error-categoria" : undefined
          }
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
          <p id="error-categoria" className="mt-1 text-sm text-red-600">
            {duckErrors.categoria}
          </p>
        )}
      </fieldset>

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
        <label htmlFor="descripcion" className="contenedor__texto-largo">
          Descripción *
        </label>
        <textarea
          id="descripcion"
          value={duckData.descripcion}
          placeholder="Descripción detallada del pato"
          onChange={handleDuckChange}
          autoComplete="off"
          required
          rows="4"
          minLength={20}
          className={`mt-1 block w-full p-2 border ${
            duckErrors.descripcion ? "input-error" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-800 focus:border-blue-800`}
          aria-invalid={!!duckErrors.descripcion}
          aria-describedby={
            duckErrors.descripcion ? "error-descripcion" : undefined
          }
        />
        {duckErrors.descripcion && (
          <p id="error-descripcion" className="mt-1 text-sm text-red-600">
            {duckErrors.descripcion}
          </p>
        )}
      </fieldset>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Añadiendo..." : "Añadir pato"}
      </button>
      {error && (
        <p role="alert" className="text-red-600 text-sm">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default FormPC;
