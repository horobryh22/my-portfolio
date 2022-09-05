import React from 'react';

import { Col } from 'react-bootstrap';

import contactImg from 'assets/img/background/contact-img.svg';
import { ReturnComponentType } from 'types';

export const ContactImage = (): ReturnComponentType => {
    return (
        <Col size={12} md={6}>
            <img className="main-img" src={contactImg} alt="Contact Us" />
        </Col>
    );
};
