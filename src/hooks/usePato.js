import { useState, useEffect } from "react";
import { getProductoById } from "../service/patoService";

//Se usa en detail este hook
export const usePato = (id) => {
  const [pato, setPato] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id){
        return; //Si viene desde state, no pedimos a la API
    } 

    const fetchPato = async () => {
      try {
        const data = await getProductoById(id);
        setPato(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPato();
  }, [id]);

  return { pato, loading, error };
};
