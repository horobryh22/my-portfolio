import React from 'react';
import classes from './Header.module.css';
import {Nav} from './Nav/Nav';
import commonClasses from '../../common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={`${commonClasses.container} ${classes.container}`}>
                <Nav/>
            </div>
        </div>
    );
};
