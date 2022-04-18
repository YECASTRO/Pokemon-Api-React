import React from "react";
import { UseFetch } from "../UseFetch";

import  Modal from './Modal';

export const CardPokemon = ({ url }) => {
    const estado = UseFetch(url);
    const { cargando, data } = estado;

  

    return (
        <div>
            {cargando ? (
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden" >Loading...</span>
                </div>
            ) : (
                <div className="row">
                    <div className="card text-center" data-bs-toggle="modal" data-bs-target={`#id${data.id}`} >
                        <div className="card-body">
                            <h5>#0{data.id}</h5>
                            <h5>Nombre: {data.forms[0].name}</h5>

                        </div>
                    </div>
                    <Modal id={`id${data.id}`} titulo={data.forms[0].name} contenido={data.abilities[0].ability.name} imagen={data.sprites.front_default} contenido2={data.sprites.back_default}/>
                </div>

            )}
        </div>
    );
};



