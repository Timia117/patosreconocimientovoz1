import { useState } from "react";
import {deleteProducto} from '../service/patoService.js'

export const useDeletePato = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const deletePato = async (id) => {
        try{
            setLoading(true);
            setError(null);
            await deleteProducto(id);
            return true;
        }catch (err){
            setError("Error al borrar al pato " + err.message);
            return false;
        }finally{
            setLoading(false);
        }
    };

    return {deletePato, loading, error };

}

