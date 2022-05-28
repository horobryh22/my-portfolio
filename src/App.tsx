import React from 'react';
import './App.module.css';
import {Header} from './components/Header/Header';
import {Promo} from './components/Promo/Promo';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Conacts/Contacts';
import {Footer} from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
