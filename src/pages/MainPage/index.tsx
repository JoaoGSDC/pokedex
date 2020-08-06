import React from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import './styles.css';

function MainPage() {
    return (
        <div className="card">
            <Navbar />
            <div className="poke-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default MainPage;