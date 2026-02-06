import {useRef, useState, useEffect} from 'react';

import { getProductos } from '../service/patoService';

export const usePatos = () =>{
    const fetched = useRef(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        if(fetched.current){
            return;
        }
        fetched.current = true;

        const fetchPatos = async () => {
            try{
                const response = await getProductos();
                setData(response);
            }catch (err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchPatos();
    }, []);
    return {data, loading, error}

};