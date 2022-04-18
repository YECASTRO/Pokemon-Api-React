import React from 'react'
import { BotonInfo } from './BotonInfo'



export const Botones = ({ results, infoPokemon }) => {

    return (
        <div className="container">

            <ul className="cards">
                {
                    results.map(p => (
                        <div className="row">
                            <div className="col-md-8">
                                <div  key={p.id} onClick={() => infoPokemon(p)}>
                                    <li className="card-item" key={p.name}>
                                        <BotonInfo url={p.url} />
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