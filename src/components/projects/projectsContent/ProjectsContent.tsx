import React from 'react';

import { Nav, Tab } from 'react-bootstrap';

import { ProjectTabs, ProjectTabsContent } from 'components/index';
import { ReturnComponentType } from 'types';

export const ProjectsContent = (): ReturnComponentType => {
    return (
        <div className="animate__animated">
            <h2>Projects</h2>
            <p>
                Below are the projects that were developed by me using such technologies
                like React, Redux, TypeScript, Jest, Redux Toolkit, React Native
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="completed">
                <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                >
                    <ProjectTabs />
                </Nav>
                <ProjectTabsContent />
            </Tab.Container>
        </div>
    );
};
