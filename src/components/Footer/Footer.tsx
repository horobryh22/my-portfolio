import React from 'react';
import classes from './Footer.module.css';
import commonClasses from '../../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={`${commonClasses.container} ${classes.container}`}>
                <h2 className={commonClasses.title}>Ilya Khorobrykh</h2>
                <div className={classes.socialContainer}>
                    <div className={classes.socialLink}></div>
                    <div className={classes.socialLink}></div>
                    <div className={classes.socialLink}></div>
                    <div className={classes.socialLink}></div>
                </div>
                <span>2022 все права защищены</span>
            </div>
        </div>
    );
};
