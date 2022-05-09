import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Swiper = () => {
    return (
        <div className="slider">
                   <Link className="nav-link active mr" to="/">Home</Link>
                   <Link className="nav-link mr" to="/international">World</Link>
                   <Link className="nav-link mr" to="/science">Science</Link>
                   <Link className="nav-link mr" to="/technology">Tech</Link>
                   <Link className="nav-link mr" to="/business">business</Link>
                   <Link className="nav-link mr" to="/sports">Sports</Link>
                   <Link className="nav-link mr" to="/health">health</Link>
                   <Link className="nav-link mr" to="/entertainment">entertainment</Link>
        </div>
    )
}