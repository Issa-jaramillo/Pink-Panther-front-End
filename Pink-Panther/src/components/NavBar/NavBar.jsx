import React, { useState } from "react";
import './NavBar.css';

import logo from '../Assets/logo.png';
import carrito from '../Assets/carrito.png';
 
const Navbar = () => {

    const [menu, setMenu] = useState("newin");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>PinkPanther</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("newin") }}>NEW IN{menu === "newin" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("tops") }}>Tops{menu === "tops" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("shorts") }}>Shorts{menu === "shorts" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("remeras") }}>Remeras{menu === "remeras" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("calzas") }}>Calzas{menu === "calzas" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("pantalones") }}>Pantalones{menu === "pantalones" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("sale") }}>SALE{menu === "sale" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("aboutus") }}>Nosotros{menu === "aboutus" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-carrito">
                <button>Mi cuenta</button>
                <img src={carrito} alt="" />
                <div className="nav-contador">0</div>
            </div>
        </div>
    );
};

export default Navbar;

