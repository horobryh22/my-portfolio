import React from 'react';

import { Nav } from 'react-bootstrap';

import { ReturnComponentType } from 'types';

export const ProjectTabs = (): ReturnComponentType => {
    return (
        <>
            <Nav.Item>
                <Nav.Link eventKey="completed">Completed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="active">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="future">In future</Nav.Link>
            </Nav.Item>
        </>
    );
};
