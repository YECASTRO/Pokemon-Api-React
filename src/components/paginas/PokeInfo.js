import React from 'react'
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

function PokeInfo  (){
    const {id} = useParams();
    const { isAuthenticated} = useAuth0();
    return(
       
        isAuthenticated && (
        <div className="container">
            hola
        </div>
    )
    )
}

export default PokeInfo