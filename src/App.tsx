import React from 'react';

import './App.module.css';
import { NavBar } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <div className="App">
            <NavBar />
        </div>
    );
};

export default App;
