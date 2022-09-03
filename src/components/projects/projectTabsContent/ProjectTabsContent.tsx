import React from 'react';

import { Row, Tab } from 'react-bootstrap';

import flashcards from 'assets/img/projects/flashcards.png';
import socialNetwork from 'assets/img/projects/social-network.webp';
import { ProjectCard } from 'components/index';
import { ProjectType, ReturnComponentType } from 'types';

const PROJECTS: ProjectType[] = [
    {
        id: 1,
        title: 'Flashcards',
        description:
            'Flashcards for online training using the question-answer system with the ability to create your own training modules (card decks), as well as their expansion (creating new cards), editing and privacy settings',
        imgUrl: flashcards,
        url: 'https://horobryh22.github.io/flashcards/',
    },
    {
        id: 2,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
        url: '',
    },
    {
        id: 3,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
        url: '',
    },
];

export const ProjectTabsContent = (): ReturnComponentType => {
    const mappedProjects = PROJECTS.map(project => {
        return <ProjectCard key={project.id} {...project} />;
    });

    return (
        <Tab.Content id="slideInUp" className="animate__animated">
            <Tab.Pane eventKey="completed">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam,
                    quod neque provident velit, rem explicabo excepturi id illo molestiae
                    blanditiis, eligendi dicta officiis asperiores delectus quasi
                    inventore debitis quo.
                </p>
            </Tab.Pane>
            <Tab.Pane eventKey="active">
                <Row>{mappedProjects}</Row>
            </Tab.Pane>
            <Tab.Pane eventKey="future">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam,
                    quod neque provident velit, rem explicabo excepturi id illo molestiae
                    blanditiis, eligendi dicta officiis asperiores delectus quasi
                    inventore debitis quo.
                </p>
            </Tab.Pane>
        </Tab.Content>
    );
};
