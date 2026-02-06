import { useState, useEffect, useRef } from "react";

/**
 * NOTA — Reconocimiento de voz en navegador
 *
 * Este hook utiliza la Web Speech API (SpeechRecognition), una API
 * experimental y no estandarizada que actualmente solo funciona de
 * forma fiable en navegadores basados en Chromium (principalmente Chrome).
 *
 * Aunque permite simular una Natural User Interface (NUI) basada en voz,
 * NO constituye una NUI real por los siguientes motivos:
 *
 * - El navegador controla completamente el acceso al micrófono.
 * - El reconocimiento solo puede iniciarse tras una acción explícita
 *   del usuario (click, touch), por razones de seguridad.
 * - El soporte varía según navegador, sistema operativo y dispositivo.
 * - En entornos móviles, el teclado virtual y la gestión del foco pueden
 *   interrumpir o finalizar el reconocimiento de forma automática.
 * - La existencia de la API (isSupported) no garantiza su funcionamiento real.
 *
 * Este enfoque es válido como demostración conceptual en aplicaciones web,
 * pero para interfaces naturales de voz robustas y multiplataforma se
 * recomienda el uso de aplicaciones nativas (React Native) o servicios
 * Speech-to-Text externos (Whisper, Azure, Google Speech, etc.).
 */
const useVoiceRecognition = (onResult) => {

  // Ver si el navegador soparta el reconocimiento de voz
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // Esta escuchando o no
  const [isListening, setIsListening] = useState(false);

  // Guardamos el reconocimiento en un ref para que React no lo destruya ni lo recree cada vez que el componente se actualiza
  const recognitionRef = useRef(null);

  // True si el navegador soporta esta API
  const isSupported = !!SpeechRecognition;

  useEffect(() => {
    // Si el navegador no soporta reconocimiento de voz, no hacemos nada
    if (!isSupported) return;

    // Crear el reconocimiento de voz y configurarlo
    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";          // Idioma
    recognition.continuous = false;      // Escucha una frase
    recognition.interimResults = false;  // Solo resultados finales (Hasta callarse)

    // Detecta voz y la convierte a texto
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript; // Se traduce a texto la voz detectada
      onResult(text);                              // Le pasa el texto ya reconocido a la función
      setIsListening(false);                       // Dejamos de escuchar
    };

    // Por si hay algún error
    recognition.onerror = (event) => {
      // Se muestra por consola el error  
      console.error("Error en reconocimiento:", event.error);
      // Deja de escuchar
      setIsListening(false);
    };

    // Cuando termina de escuchar
    recognition.onend = () => setIsListening(false);

    // Guardamos el reconocimiento en el ref
    recognitionRef.current = recognition;

  }, [SpeechRecognition, onResult, isSupported]);

  // Función para empezar a escuchar
  const startListening = () => {
    // Si no se soporta o no se ha inicializado el reconocimiento, no hacemos nada
    if (!isSupported || !recognitionRef.current) return;

    try {
      // Empezamos a escuchar  
      setIsListening(true);
      recognitionRef.current.start(); 
    } catch {
      console.warn("Ya está escuchando...");
    }
  };

  // Devolvemos el estado y la función para empezar a escuchar
  return {
    isSupported,     // Si el navegador lo soporta 
    isListening,     // Si está escuchando 
    startListening: isSupported ? startListening : () => {} // Función para empezar a escuchar (si no la soporta, es una función vacía)
  };
};

export default useVoiceRecognition;
