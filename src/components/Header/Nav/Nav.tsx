import React from 'react';
import classes from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="src/components/Header/Nav/Nav">Главная</a>
            <a href="src/components/Header/Nav/Nav">Скиллы</a>
            <a href="src/components/Header/Nav/Nav">Проекты</a>
            <a href="src/components/Header/Nav/Nav">Контакты</a>
        </div>
    );
};
