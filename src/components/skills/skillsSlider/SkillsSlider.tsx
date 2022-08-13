import React from 'react';

import Carousel from 'react-multi-carousel';

import eslint from 'assets/img/skills/eslint.svg';
import git from 'assets/img/skills/git.svg';
import github from 'assets/img/skills/github.svg';
import javascript from 'assets/img/skills/javascript.svg';
import jest from 'assets/img/skills/jest.svg';
import react from 'assets/img/skills/react.svg';
import redux from 'assets/img/skills/redux.svg';
import storybook from 'assets/img/skills/storybook.svg';
import typescript from 'assets/img/skills/typescript.svg';
import { ReturnComponentType, SkillType } from 'types';

const RESPONSIVE = {
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
const SKILLS: SkillType[] = [
    {
        id: 1,
        name: 'JavaScript',
        src: javascript,
    },
    {
        id: 2,
        name: 'TypeScript',
        src: typescript,
    },
    {
        id: 3,
        name: 'React',
        src: react,
    },
    {
        id: 4,
        name: 'Redux',
        src: redux,
    },
    {
        id: 5,
        name: 'Git',
        src: git,
    },
    {
        id: 6,
        name: 'GitHub',
        src: github,
    },
    {
        id: 7,
        name: 'ESLint',
        src: eslint,
    },
    {
        id: 8,
        name: 'Jest',
        src: jest,
    },
    {
        id: 9,
        name: 'Storybook',
        src: storybook,
    },
];

export const SkillsSlider = (): ReturnComponentType => {
    const mappedSkills = SKILLS.map(skill => {
        return (
            <div key={skill.id} className="item">
                <img src={skill.src} alt="storybook" />
                <h5>{skill.name}</h5>
            </div>
        );
    });

    return (
        <Carousel
            responsive={RESPONSIVE}
            infinite
            className="owl-carousel owl-theme skill-slider"
        >
            {mappedSkills}
        </Carousel>
    );
};
