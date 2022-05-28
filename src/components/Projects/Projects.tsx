import React from 'react';
import classes from './Projects.module.css';
import commonClasses from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';


export const Projects = () => {
    return (
        <div className={classes.projects}>
            <div className={`${commonClasses.container} ${classes.container}`}>
                <h2 className={commonClasses.title}>My Projects</h2>
                <div className={classes.projectsBox}>
                    <Project title={'Название проекта'} image={''}
                             description={'Lorem ipsum aut sit tenetur dolor sit amet, consectetur adipisicing aut sit tenetur elit aut sit tenetur.'}/>
                    <Project title={'Название проекта'} image={''}
                             description={'Aliquid aut sit tenetur velit voluptates? Aliquam corporis et facilis impedit'}/>
                    <Project title={'Название проекта'} image={''}
                             description={'Aliquid aut sit tenetur velit voluptates? Aliquam corporis et facilis impedit'}/>
                </div>
            </div>
        </div>
    );
};
