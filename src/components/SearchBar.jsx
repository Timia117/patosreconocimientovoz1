
/**
 * SearchBar component for user input with accessibility features
 * @component
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Current search input value
 * @param {Function} props.onSearchChange - Callback function triggered on input change, receives the new search term
 * @param {string} [props.placeholder="Buscar..."] - Placeholder text for the input field
 * @returns {React.ReactElement} A search input section with styling and accessibility attributes
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
  return (
    <section className="mb-8 w-full max-w-lg mx-auto">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        // Llama a la función proporcionada por el padre en cada cambio
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-inner
                    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition
                    duration-150 ease-in-out"
        aria-label={placeholder}
      />
    </section>
  );
}
export default SearchBar;
