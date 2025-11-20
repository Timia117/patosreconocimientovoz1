"use strict";

/**
 *Organiza la estructura principal 
 *Encabezado = titilo y subtitulo
 *Lista de productos = tarjetas de patos (items)
 */
function GlobalContent({ children }) {
  // h2 y h3 = (pilla el 1 y el dos)
  const encabezados = children.slice(0, 2);
  // Los patos (pilla el resto)
  const items = children.slice(2);

  return (
    <>
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200
        flex flex-col items-center justify-center p-8"
      >
        {/* Bloque contenedor */}
        <article className="contenedor__contenido w-full max-w-7xl mx-auto px-4">
          
          {/* Elemento: encabezados */}
          <section className="contenedor__encabezados text-start space-y-2">
            {encabezados}
          </section>

          {/* Elemento: lista de productos */}
          <section
            className="contenedor__grid 
              grid grid-cols-1                  {/* Móvil */}
              sm:grid-cols-2                    {/* Columnas del móvil */}
              lg:grid-cols-4                    {/* Pantallas grandes */}
              gap-4 w-full mt-8"
          >
            {items}
          </section>
        </article>
      </main>
    </>
  );
}

export default GlobalContent;