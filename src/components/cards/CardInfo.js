import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const CardInfo = ({ data }) => {

    console.log(data)
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
                    (!data) ? "" : (
                        <div>
                       
                            <h1>Nombre: {data.name}</h1>
                           
                        </div>

                    )
                }
            </div>
        )
        
    )
}

