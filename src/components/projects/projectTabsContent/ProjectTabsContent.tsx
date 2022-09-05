import React from 'react';

import { Row, Tab } from 'react-bootstrap';

import { ProjectCard } from 'components';
import { PROJECTS } from 'constants/projects';
import { ReturnComponentType } from 'types';

export const ProjectTabsContent = (): ReturnComponentType => {
    const mappedProjects = PROJECTS.map(project => {
        return <ProjectCard key={project.id} {...project} />;
    });

    return (
        <Tab.Content id="slideInUp" className="animate__animated">
            <Tab.Pane eventKey="completed">
                <p>New projects will appear soon in this section.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="active">
                <Row>{mappedProjects}</Row>
            </Tab.Pane>
            <Tab.Pane eventKey="future">
                <p>New projects will appear soon in this section.</p>
            </Tab.Pane>
        </Tab.Content>
    );
};
