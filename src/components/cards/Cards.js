import React from 'react'
import { CardPokemon } from './CardPokemon'


import './Cards.css'
export const Cards = ({ results, infoPokemon }) => {

    return (
        <div className="container">

            <ul className="cards">
                {
                    results.map(p => (
                        <div className="row">
                            <div className="col-md-12">
                                <div  key={p.id} onClick={() => infoPokemon(p)}>
                                    <li className="card-item" key={p.name}>
                                        <CardPokemon url={p.url} />
                                    </li>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </ul>
        </div>
    )
}