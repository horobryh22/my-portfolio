import React from 'react';

import classes from './HelperText.module.css';

import success from 'assets/img/success.svg';
import { ReturnComponentType } from 'types';

export const HelperText = (): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                <img src={success} alt="success" />
            </div>
            <span className={classes.text}>
                Thank you! I will definitely get in touch with you soon.
            </span>
        </div>
    );
};
