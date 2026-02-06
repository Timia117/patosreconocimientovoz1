
function FormInput({nombre, id, type, value, onChange, error, errorId, placeholder, autocomplete}) {
    return (
         <section>
          <label htmlFor={id} className="contenedor__texto-largo">
            {nombre}
          </label>
          <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete={autocomplete}
            required
            className={`mt-1 block w-full p-2 border ${
              error ? "input-error" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-800 focus:border-blue-800`}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
          />
          {error && (
            <p id={errorId} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          )}
        </section>
    );
}
export default FormInput;