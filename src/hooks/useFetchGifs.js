import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'



export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    /* Cuando el argumento de dependencias es un array
    vacío, sólo se ejecuta getGifs la primera vez que
    se renderiza el componente. */

    useEffect(() => {
        getGifs(category)
            .then( imgs => {

                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                });
            })
        
    }, [category]);

    return state; // data: [], loading: true

}