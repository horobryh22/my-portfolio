import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { NavBar, Promo } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <div className="App">
            <NavBar />
            <Promo />
        </div>
    );
};

export default App;
