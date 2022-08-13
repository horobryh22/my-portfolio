import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Contact, Footer, NavBar, Projects, Promo, Skills } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <div className="App">
            <NavBar />
            <Promo />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
