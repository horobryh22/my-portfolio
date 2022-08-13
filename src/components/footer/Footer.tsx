import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css';

import logo from 'assets/img/footer-logo.svg';
import facebook from 'assets/img/social/icon_facebook.svg';
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
                            <a href="#linkedin">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="#inst">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="#facebook">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
