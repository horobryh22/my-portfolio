import React from 'react';

import { Col } from 'react-bootstrap';

import classes from './ProjectCard.module.css';
import { ProjectCardType } from './types';

import github from 'assets/img/skills/github.svg';
import vercel from 'assets/img/skills/vercel.svg';
import { ProjectButton } from 'components';
import { ReturnComponentType } from 'types';

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    projectUrl,
    codeUrl,
}: ProjectCardType): ReturnComponentType => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="card" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className={classes.buttons}>
                        <ProjectButton
                            url={projectUrl}
                            buttonName="view project"
                            src={vercel}
                        />
                        <ProjectButton
                            url={codeUrl}
                            buttonName="view code"
                            src={github}
                        />
                    </div>
                </div>
            </div>
        </Col>
    );
};
