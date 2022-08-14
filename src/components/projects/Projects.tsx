import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import './Projects.css';
import { ProjectsContent } from 'components';
import { ReturnComponentType } from 'types';

export const Projects = (): ReturnComponentType => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <ProjectsContent />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
