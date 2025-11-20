function ContenedorGlobal({ titulo, children }) {
  return (

      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="contenedor__titulo mb-6"
          >
            {titulo}
          </h1>
        )}
        {children}
      </section>
   
  );
}

export default ContenedorGlobal;
