import React from "react";
import {Link} from "react-router-dom";


export const Navbar = () => {
    return <div className="navbar">
        <div className="Links">
            <Link style={{fontSize:"40px", pointerEvents: 'none'}}>WELEDA </Link>
            <Link to ="/"> O nama </Link>
            <Link to='/shop'>Prodavnica</Link>
            <Link to='/cart'>Korpa</Link>
            <Link to="/kontakt">Kontakt</Link>
        </div>
    </div>;
};