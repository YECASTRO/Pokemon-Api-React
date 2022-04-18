import React from "react";
import { UseFetch } from "../UseFetch";
import { Link } from "react-router-dom";

export const CardPokemon = ({ url }) => {
    const estado = UseFetch(url);
    const { cargando, data } = estado;

    return (
        <div>
            {cargando ? (
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{data.id}</h5>
                            <h5 className="card-title">{data.forms[0].name}</h5>

                            <h5 className="card-title">{data.abilities[0].ability.name}</h5>

                            <img src={data.sprites.front_default} alt="pokemon" />

                            <Link to={`/pokeinfo/${data.id}`}>See more</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
