import React from 'react';

import { Award, FolderCheck, People } from 'react-bootstrap-icons';

import { ReturnComponentType } from 'types';

export const AboutContent = (): ReturnComponentType => {
    return (
        <div className="about-content">
            <div className="about-cards">
                <article className="about-card">
                    <Award className="about-icon" />
                    <h5>Experience</h5>
                    <small>1+ Years Working</small>
                </article>
                <article className="about-card">
                    <People className="about-icon" />
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                </article>
                <article className="about-card">
                    <FolderCheck className="about-icon" />
                    <h5>Projects</h5>
                    <small>5+ Completed</small>
                </article>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt
                ipsam itaque maiores provident quia similique voluptas! Ad adipisci
                dolorem, dolores eaque nemo nulla perspiciatis praesentium repudiandae
                suscipit tempore vel!
            </p>
        </div>
    );
};
