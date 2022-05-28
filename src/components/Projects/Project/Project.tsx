import React from 'react';
import classes from './Project.module.css'

type ProjectPropsType = {
    image: string
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = ({description, title, image}) => {
    return (
        <div className={classes.project}>
            <div className={classes.imageContainer}>
                <a href="#">Посмотреть</a>
            </div>
            <div className={classes.text}>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    );
};
