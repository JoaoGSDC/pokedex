import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Details from './pages/Details';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainPage} />
            <Route path="/details" component={Details} />
        </BrowserRouter>
    );
}

export default Routes;