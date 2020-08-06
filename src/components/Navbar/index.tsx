import React from 'react';

import './styles.css'

function Navbar() {
    return (
        <nav>
            <input type="text" placeholder="Pesquisar Pokémon..." className="input-search" />
        </nav>
    );
}

export default Navbar;