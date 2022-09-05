import React from 'react';
import 'react-multi-carousel/lib/styles.css';

import './Skills.css';

import background from 'assets/img/background/color-sharp.png';
import { SkillsSlider } from 'components';
import { ReturnComponentType } from 'types';

export const Skills = (): ReturnComponentType => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p style={{ textAlign: 'center' }}>
                                At the moment, I am also studying such technologies like
                                NextJS, React Native, Express, MongoDB, SSR, and more.
                                <br /> I like to improve my skills and to know something
                                new.
                            </p>
                            <SkillsSlider />
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={background} alt="background" />
        </section>
    );
};
