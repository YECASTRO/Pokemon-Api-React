import React from 'react'
import { CardPokemon } from './CardPokemon'


import './Cards.css'
export const Cards = ({ results, infoPokemon }) => {

    return (
        <div className="container">

                {
                    results.map(p => (
                        
                            <div className="col-md-12">
                                <div className="card" key={p.id} onClick={() => infoPokemon(p)}>
                                    <li className="card-item" key={p.name}>
                                        <CardPokemon url={p.url} />
                                    </li>
                                </div>
                            </div>
                      
                    ))
                }

           
        </div>
    )
}