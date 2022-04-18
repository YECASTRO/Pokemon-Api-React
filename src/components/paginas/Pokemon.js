import React, { useState } from 'react'
import { UseFetch } from '../UseFetch'
import { Cards } from '../cards/Cards'

import {CardInfo} from '../cards/CardInfo'

const Pokemon = () => {
   
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const estado = UseFetch(url)
    const { cargando, data } = estado
    cargando ? console.log('cargando') : console.log(data.results)
 
    const [pokeDex,setPokeDex]=useState();
    return (
      
            <div>
                {
                    cargando
                        ?
                        <div>
                        <div class="spinner-grow text-warning" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                
                      </div>
                        :
                        <div className="row">
                            <div className="col-md-8">
                                <Cards results={data.results} infoPokemon={poke=>setPokeDex(poke)} />
                               
                                <div className='container m-auto text-center'>

                                    <button onClick={() => setUrl(data.previous)} className='m-2 btn btn-dark'>Anterior</button>
                                    <button onClick={() => setUrl(data.next)} className='m-2 btn btn-dark'>Siguiente</button>
                                </div>
                            </div>
                    
                            <CardInfo pokemon={pokeDex} />
                            
                            
                            
                        </div>
                        

                }
            </div>
        


    )
}

export default Pokemon