import React from 'react';

import './styles.css';

function Details() {
    return (
        <div className="null">
            <div className="card card-details">
                <div className="card-header">
                    <div className="spheric-main"></div>
                    <div className="spheric-red"></div>
                    <div className="spheric-yellow"></div>
                    <div className="spheric-green"></div>
                </div>
                <div className="container-data">
                    <div className="f1">
                        <div className="img-container"></div>
                        <div className="column">
                            <label className="pokemon-name">Pikachu</label>
                        </div>
                    </div>
                    <div className="f1">
                        <div className="column">
                            <label className="sub-title">Descrição</label>
                            <label className="pokemon-text">Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.</label>
                        </div>

                        <div className="flex">
                            <div className="column f1">
                                <label className="sub-title">Altura</label>
                                <label className="pokemon-text">30cm</label>
                            </div>

                            <div className="column f1">
                                <label className="sub-title">Peso</label>
                                <label className="pokemon-text">1 Kg</label>
                            </div>
                        </div>

                        <div className="column">
                            <label className="sub-title">Tipo</label>
                            <label className="pokemon-text">Elétrico</label>
                        </div>

                        <div className="flex">
                            <div className="column f1">
                                <label className="sub-title">Ataque</label>
                                <label className="pokemon-text">75</label>
                            </div>

                            <div className="column f1">
                                <label className="sub-title">Defesa</label>
                                <label className="pokemon-text">50</label>
                            </div>

                            <div className="column f1">
                                <label className="sub-title">Velocidade</label>
                                <label className="pokemon-text">50 Km/h</label>
                            </div>

                        </div>

                        <div className="flex">
                            <div className="column f1">
                                <label className="sub-title">HP</label>
                                <label className="pokemon-text">80</label>
                            </div>

                            <div className="column f1">
                                <label className="sub-title">Passos da evolução</label>
                                <label className="pokemon-text">500</label>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;