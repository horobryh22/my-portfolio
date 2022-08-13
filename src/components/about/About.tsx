import React from 'react';

import './About.css';

import background from 'assets/img/background/color-sharp.png';
import { ReturnComponentType } from 'types';

export const About = (): ReturnComponentType => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-bx">
                            <h2>About</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                                <br /> Lorem Ipsum has been the standard dummy text.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={background} alt="background" />
        </section>
    );
};
