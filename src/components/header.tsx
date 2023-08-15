import React from "react";

const Header = () => {
    return (
        <header>
            <h1>¡Bienvenido a mi Aplicación!</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/acerca">Acerca de</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
