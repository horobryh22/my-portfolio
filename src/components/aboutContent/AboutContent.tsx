import React from 'react';

import { Award, Apple, FolderCheck } from 'react-bootstrap-icons';

import { ReturnComponentType } from 'types';

export const AboutContent = (): ReturnComponentType => {
    return (
        <div className="about-content">
            <div className="about-cards">
                <article className="about-card">
                    <Award className="about-icon" />
                    <h5>Experience</h5>
                    <small>8+ months</small>
                </article>
                <article className="about-card">
                    <Apple className="about-icon" />
                    <h5>Technologies</h5>
                    <small>10+ were learned</small>
                </article>
                <article className="about-card">
                    <FolderCheck className="about-icon" />
                    <h5>Projects</h5>
                    <small>5+ Completed</small>
                </article>
            </div>
            <p>
                Hi there! I&apos;m frontend developer with experience in building
                single-page applications, based on React.js, Redux.js with Typescript. I
                focus on code quality, following trends, learning new technologies and
                improving my hard skills and English. I open for full-time/part-time
                remote or hybrid work and new frameworks (Angular, Vue).
            </p>
        </div>
    );
};
