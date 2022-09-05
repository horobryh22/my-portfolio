import React from 'react';

import './About.css';

import background from 'assets/img/background/color-sharp.png';
import me from 'assets/img/me/me.jpg';
import { AboutContent } from 'components';
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
                                <AboutContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={background} alt="background" />
        </section>
    );
};
