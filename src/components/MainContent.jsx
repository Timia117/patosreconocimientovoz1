import { Outlet } from "react-router-dom";

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
