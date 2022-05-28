import React from 'react';
import classes from './Promo.module.css';
import commonClasses from '../../common/styles/Container.module.css'

export const Promo = () => {
    return (
        <div className={classes.promo}>
            <div className={`${commonClasses.container} ${classes.container}`}>
                <div className={classes.description}>
                    <span>Hi There</span>
                    <h1>I am Ilya Khorobrykh</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={classes.photo}></div>
            </div>
        </div>
    );
};
