import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Cards.css'
const Modal = ({ id, titulo, contenido, imagen, contenido2 }) => {

    const { isAuthenticated } = useAuth0();
  

    return (

        isAuthenticated && (
        <div>
            <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <h5>{contenido}</h5>  
                            <img src={imagen} alt="pokemon" />
                            <img src={contenido2} alt="pokemon" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
    
    )
}
export default Modal