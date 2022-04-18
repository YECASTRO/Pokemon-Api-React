import React from "react";
import { UseFetch } from "../UseFetch";

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
                            <h5>#0 {data.id}</h5>
                            <h5>Nombre: {data.forms[0].name}</h5>

                            <h5>Habilidades: {data.abilities[0].ability.name}</h5>
                            <img src={data.sprites.front_default} alt="pokemon" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
