import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Skills.css';

import background from 'assets/img/color-sharp.png';
import eslint from 'assets/img/eslint.svg';
import git from 'assets/img/git.svg';
import github from 'assets/img/github.svg';
import javascript from 'assets/img/javascript.svg';
import jest from 'assets/img/jest.svg';
import react from 'assets/img/react.svg';
import redux from 'assets/img/redux.svg';
import storybook from 'assets/img/storybook.svg';
import typescript from 'assets/img/typescript.svg';
import { ReturnComponentType } from 'types';

export const Skills = (): ReturnComponentType => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

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
                            <Carousel
                                responsive={responsive}
                                infinite
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={javascript} alt="javascript" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="typescript" />
                                    <h5>Type Script</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="react" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="redux" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="git" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="github" />
                                    <h5>GitHub</h5>
                                </div>
                                <div className="item">
                                    <img src={eslint} alt="eslint" />
                                    <h5>ESLint</h5>
                                </div>
                                <div className="item">
                                    <img src={jest} alt="jest" />
                                    <h5>Jest</h5>
                                </div>
                                <div className="item">
                                    <img src={storybook} alt="storybook" />
                                    <h5>Storybook</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={background} alt="background" />
        </section>
    );
};
