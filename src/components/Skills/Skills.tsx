import React from 'react';
import classes from './Skills.module.css';
import {Skill} from './Skill/Skill';
import commonClasses from '../../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={classes.skills}>
            <div className={`${commonClasses.container} ${classes.container}`}>
                <h2 className={commonClasses.title}>My skills</h2>
                <div className={classes.skillBox}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda commodi corporis culpa dolor earum fugiat in'}
                           icon={''}/>
                    <Skill title={'CSS'} description={'Some text'} icon={''}/>
                    <Skill title={'React'} description={'Some text'} icon={''}/>
                </div>
            </div>
        </div>
    );
};
