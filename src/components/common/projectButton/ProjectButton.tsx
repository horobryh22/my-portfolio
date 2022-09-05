import React from 'react';

import classes from './ProjectButton.module.css';
import { ProjectButtonType } from './types';

import { ReturnComponentType } from 'types';

export const ProjectButton = ({
    buttonName,
    url,
    src,
}: ProjectButtonType): ReturnComponentType => {
    return (
        <button
            className={classes.buttonWrapper}
            type="button"
            onClick={() => {
                window.open(url, '_blank');
            }}
        >
            <div className={classes.imgWrapper}>
                <img src={src} alt="vercel" />
            </div>
            <span>{buttonName}</span>
        </button>
    );
};
