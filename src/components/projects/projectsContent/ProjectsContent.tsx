import React from 'react';

import { Nav, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

import { ProjectTabs, ProjectTabsContent } from 'components/index';
import { ReturnComponentType } from 'types';

export const ProjectsContent = (): ReturnComponentType => {
    return (
        <TrackVisibility>
            {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated' : ''}>
                    <h2>Projects</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="active">
                        <Nav
                            variant="pills"
                            className="nav-pills mb-5 justify-content-center align-items-center"
                            id="pills-tab"
                        >
                            <ProjectTabs />
                        </Nav>
                        <ProjectTabsContent isVisible={isVisible} />
                    </Tab.Container>
                </div>
            )}
        </TrackVisibility>
    );
};
