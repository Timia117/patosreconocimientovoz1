import { Outlet } from "react-router-dom";

/**
 * MainContent component - A layout wrapper for main page content
 * 
 * Renders a main semantic element with a gradient background that serves as the primary
 * content area. Displays an optional title and renders nested route components via Outlet.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.titulo] - Optional title to display at the top of the main content section
 * @returns {React.ReactElement} A main element with centered flex layout containing an optional title and route outlet
 * 
 * @example
 * <MainContent titulo="Welcome to Patos Accesibles" />
 */
function MainContent({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl"
      >
        {titulo && (
          <h1 id="main-section-title" className="contenedor__titulo mb-2">
            {titulo}
          </h1>
        )}
      </section>
      <Outlet />
    </main>
  );
}
export default MainContent;
