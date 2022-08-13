import React from 'react';

import './About.css';
import { Award, People, FolderCheck } from 'react-bootstrap-icons';

import background from 'assets/img/background/color-sharp.png';
import me from 'assets/img/me/me-about.jpg';
import { ReturnComponentType } from 'types';

export const About = (): ReturnComponentType => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-bx">
                            <h2>About Me</h2>
                            <div className="about-container">
                                <div className="about-me">
                                    <div className="about-me-image">
                                        <img src={me} alt="me" />
                                    </div>
                                </div>
                                <div className="about-content">
                                    <div className="about-cards">
                                        <article className="about-card">
                                            <Award className="about-icon" />
                                            <h5>Experience</h5>
                                            <small>3+ Years Working</small>
                                        </article>
                                        <article className="about-card">
                                            <People className="about-icon" />
                                            <h5>Clients</h5>
                                            <small>200+ Worldwide</small>
                                        </article>
                                        <article className="about-card">
                                            <FolderCheck className="about-icon" />
                                            <h5>Projects</h5>
                                            <small>80+ Completed</small>
                                        </article>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Culpa deserunt ipsam itaque
                                        maiores provident quia similique voluptas! Ad
                                        adipisci dolorem, dolores eaque nemo nulla
                                        perspiciatis praesentium repudiandae suscipit
                                        tempore vel!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={background} alt="background" />
        </section>
    );
};
