import React from 'react';

import { Row, Tab } from 'react-bootstrap';

import socialNetwork from 'assets/img/projects/social-network.webp';
import { ProjectCard } from 'components/index';
import { ProjectTabsContentType } from 'components/projects/projectTabsContent/types';
import { ProjectType, ReturnComponentType } from 'types';

const PROJECTS: ProjectType[] = [
    {
        id: 1,
        title: 'Social Network',
        description: 'Lorem  ',
        imgUrl: socialNetwork,
    },
    {
        id: 2,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
    },
    {
        id: 3,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
    },
    {
        id: 4,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
    },
    {
        id: 5,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
    },
    {
        id: 6,
        title: 'Business Startup',
        description: 'Design & Development',
        imgUrl: socialNetwork,
    },
];

export const ProjectTabsContent = ({
    isVisible,
}: ProjectTabsContentType): ReturnComponentType => {
    const mappedProjects = PROJECTS.map(project => {
        return <ProjectCard key={project.id} {...project} />;
    });

    return (
        <Tab.Content
            id="slideInUp"
            className={isVisible ? 'animate__animated animate__slideInUp' : ''}
        >
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
