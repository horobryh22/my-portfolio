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
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                                <br /> Lorem Ipsum has been the standard dummy text.
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
