import React from "react";
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux"

function Banner(){
    const state = useSelector((state) => state.handleCart)
    return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                    </ul>
                    <div className="buttons">
                        <NavLink to="/Login" className="btn btn-outline-dark me-1">Login</NavLink>
                        <NavLink to="/Register" className="btn btn-outline-dark me-1 ms-2">Register</NavLink>
                        <NavLink to="/Cart" className="btn btn-outline-dark me-1 ms-2">Cart ({state.length})</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
            
    )
}

export default Banner