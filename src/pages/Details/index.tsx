import React from 'react';

import './styles.css';

function Details() {
    return (
        <div className="h80">
            <div className="card card-details h80">
                <div className="card-header">
                    <div className="spheric-main"></div>
                    <div className="spheric-red"></div>
                    <div className="spheric-yellow"></div>
                    <div className="spheric-green"></div>
                </div>
                <div className="container-data">
                    <div className="f1">IMAGEM</div>
                    <div className="f1">
                        <div className="column">
                            <label className="sub-title">Descrição</label>
                            <label className="pokemon-text">Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.</label>
                        </div>

                        <div className="column">
                            <label className="sub-title">Altura</label>
                            <label className="pokemon-text">30cm</label>
                        </div>

                        <div className="column">
                            <label className="sub-title">Peso</label>
                            <label className="pokemon-text">1 Kg</label>
                        </div>

                        <div className="column">
                            <label className="sub-title">Tipo</label>
                            <label className="pokemon-text">Elétrico</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;