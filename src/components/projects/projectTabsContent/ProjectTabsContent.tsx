import React from 'react';

import { Row, Tab } from 'react-bootstrap';

import { ProjectCard } from 'components';
import { ACTIVE_PROJECTS, COMPLETED_PROJECTS } from 'constants/projects';
import { ReturnComponentType } from 'types';

export const ProjectTabsContent = (): ReturnComponentType => {
    const completedProjects = COMPLETED_PROJECTS.map(project => {
        return <ProjectCard key={project.id} {...project} />;
    });

    const activeProjects = ACTIVE_PROJECTS.map(project => {
        return <ProjectCard key={project.id} {...project} />;
    });

    return (
        <Tab.Content id="slideInUp" className="animate__animated">
            <Tab.Pane eventKey="completed">
                <Row>{completedProjects}</Row>
            </Tab.Pane>
            <Tab.Pane eventKey="active">
                <Row>{activeProjects}</Row>
            </Tab.Pane>
            <Tab.Pane eventKey="future">
                <p>New projects will appear soon in this section.</p>
            </Tab.Pane>
        </Tab.Content>
    );
};
