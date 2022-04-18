import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const CardInfo = ({ pokemon }) => {

    console.log(pokemon)
    const { isAuthenticated, isLoading } = useAuth0();

    
  if (isLoading) {

    return (
      <div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

      </div>
    )
  }
    return (
        isAuthenticated && (
            <div>
                {
                    (!pokemon) ? "" : (
                        <div>
                        <h5 >{pokemon.id}</h5>
                            <h1>Nombre: {pokemon.name}</h1>
                           
                        </div>

                    )
                }
            </div>
        )
    )
}

