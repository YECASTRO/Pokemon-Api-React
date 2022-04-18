import React from 'react'
import {Link} from 'react-router-dom'
import { LoginButton } from '../login/LoginButton'
import axios from 'axios'

const Navbar = () => {
    const mostrarAlerta=()=>{
        alert("Para ver la información debes registrarte")
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>{" "}
                            </li>
                            <li className="nav-item" onClick={() =>mostrarAlerta()}>
                                <Link className="nav-link" to='/pokemon'>Pokemon</Link>
                            </li>
                            
                            <li><LoginButton/></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar