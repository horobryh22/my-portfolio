import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import './Projects.css';

import background from 'assets/img/background/color-sharp2.png';
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
            <img className="background-image-right" alt="background" src={background} />
        </section>
    );
};
