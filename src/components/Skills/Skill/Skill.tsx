import React from 'react';
import classes from './Skill.module.css';

export type SkillPropsType = {
    icon: string
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = ({description, icon, title}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}>
                {/*<img src="" alt=""/>*/}
            </div>
            <div className={classes.title}>
                <h3>{title}</h3>
            </div>
            <span>{description}</span>
        </div>
    );
};
