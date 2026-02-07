import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import { useMemo } from "react";
import CardDuck from "../components/CardDuck";

import { usePatos } from "../hooks/usePatos";

import useVoiceRecognition from "../hooks/useVoiceRecognition";
import { Mic } from "lucide-react";

function Ducks() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: patos, loading, error } = usePatos();

  // Llamo al hook de reconocimiento de voz
  // Se le pasa text que es lo que se ha reconocido para que lo ponga en el searchTerm
  const voice = useVoiceRecognition((text) => setSearchTerm(text));

  // Si es móvil, no mostramos el botón de voz porque no es útil
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Para mostrar un mensaje de "desliza para buscar por voz" en móvil
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Posicion inicial del toque
  let touchStartX = 0;
  // Posición final del toque
  let touchEndX = 0;

  // Al empezar a arrastrar el toque
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  // Al terminar el toque, calculamos la diferencia
  // Si es un deslizamiento hacia la derecha
  // Se activa el reconocimiento de voz
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX; // Posición final del toque
    const diff = touchEndX - touchStartX; //Diferencia entre el inicio y el final del toque

    // Si la diferencia es mayor a 60px, se activa el reconocimiento de voz y se oculta el mensaje de deslizar
    if (diff > 60 && isMobile && voice.isSupported) {
      voice.startListening();
      setShowSwipeHint(false);
    }
  };

  const filteredPatos = useMemo(() => {
    if (!searchTerm) {
      return patos;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return patos.filter((pato) =>
      pato.nombre.toLowerCase().includes(lowerCaseSearchTerm),
    );
  }, [searchTerm, patos]);

  return (
    <>
      <section>
        <h2 className="contenedor__titulo mb-2">Nuestros Patos</h2>
        <p className="contenedor__texto-largo mb-6">
          Coloridos, divertidos y coleccionables
        </p>
      </section>

      <section
        className="relative w-full max-w-lg mx-auto mb-6 z-10"
        onTouchStart={handleTouchStart} // Para detectar el inicio del toque
        onTouchEnd={handleTouchEnd} // Para detectar el final del toque
      >
        
        {/* Se muestra si es móvil y el reconocimiento de voz lo soporta */}
        { isMobile && voice.isSupported && (
<p className="text-red-500 text-sm mb-2 !text-red-500">
            {/* Si está escuchando, muestra "Escuchando...", si no, 
            muestra el mensaje de deslizar 
            */}
            {voice.isListening
              ? "Escuchando..."
              : "Desliza → para buscar por voz"}
          </p>
        )}
        <section className="relative">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Buscar patos por nombre..."
            className={!isMobile ? "pr-12" : ""}
          />
          {/* Si no está en móvil y el reconocimiento de voz lo soporta, mostramos el botón */}
          {!isMobile && voice.isSupported && (
            <button
              onClick={voice.startListening}
              className={`absolute right-4 top-4
              ${
                voice.isListening
                  ? "text-red-500 animate-pulse"
                  : "text-gray-400 hover:text-blue-600"
              }`}
              title="Buscar por voz"
            >
              <Mic size={20} />
            </button>
          )}
        </section>
      </section>
      <section>
        {loading && (
          <section className="flex justify-center items-center h-64 mt-8">
            <p className="contenedor__texto-normal">
              Cargando patos desde la api...
            </p>
          </section>
        )}

        {error && (
          <section className="flex justify-center items-center h-64 mt-8">
            <p className="contenedor__texto-normal text-red-600">
              Error al cargar los patos: {error}
            </p>
          </section>
        )}
      </section>

      <section>
        {!loading && !error && (
          <section
            aria-label="Listado completo de patos"
            className="grid-patos"
          >
            {filteredPatos.length > 0 ? (
              filteredPatos.map((pato) => (
                <Link
                  key={pato.id}
                  to={`/patos/${pato.id}`}
                  aria-label={`Ver detalles de ${pato.nombre}`}
                >
                  <CardDuck
                    nombre={pato.nombre}
                    foto={pato.imagen}
                    descripcion={pato.descripcion}
                    precio={pato.precio}
                  />
                </Link>
              ))
            ) : (
              // Mensaje si no hay resultados
              <p className="col-span-full text-center text-gray-500 p-4">
                No se encontraron patos con el término "{searchTerm}".
              </p>
            )}
          </section>
        )}
      </section>
    </>
  );
}

export default Ducks;