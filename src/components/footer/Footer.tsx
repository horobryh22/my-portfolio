import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css';

import logo from 'assets/img/footer-logo.svg';
import github from 'assets/img/skills/github.svg';
import instagram from 'assets/img/social/icon_instagram.svg';
import linkedin from 'assets/img/social/icon_linkedin.svg';
import { ReturnComponentType } from 'types';

export const Footer = (): ReturnComponentType => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center text-sm-start">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="logo" className="footer-logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hororbryh22/">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="https://www.instagram.com">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="https://github.com/horobryh22">
                                <img src={github} alt="facebook" />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
