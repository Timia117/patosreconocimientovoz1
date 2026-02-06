import { useState } from "react";
import {createProducto} from '../service/patoService.js'

export const useCreatePato = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const addPato = async (pato) =>{
        try{
            setLoading(true);
            setError(null);
            await createProducto(pato);
            return true;

        }catch (err){
            setError("Error al crear el pato " + err.message);
            return false;
        }finally{
            setLoading(false);
        }
    };
    
    return { addPato, loading, error };


}