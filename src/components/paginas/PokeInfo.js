import React from 'react'
import { useParams } from 'react-router-dom';

function PokeInfo  (){
    const {id} = useParams();

    return(
        <div className="container">
            hola
        </div>
    )
}

export default PokeInfo