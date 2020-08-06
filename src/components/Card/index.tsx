import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Card() {
    return (
        <div className="main-card">
            <div className="poke-img"></div>
            <div className="register-body">
                <label className="poke-sub-title">Nº 025</label>
                <label className="poke-title">Pikachu</label>
            </div>
            <Link className="btn btn-card" to="/details">Detalhes</Link>
        </div>
    );
}

export default Card;