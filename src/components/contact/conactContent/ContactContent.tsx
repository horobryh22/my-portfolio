import React from 'react';

import { Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

import { ContactForm } from 'components';
import { ReturnComponentType } from 'types';

export const ContactContent = (): ReturnComponentType => {
    return (
        <Col size={12} md={6}>
            <TrackVisibility>
                {({ isVisible }) => (
                    <div className={isVisible ? 'animate__animated' : ''}>
                        <h2>Get In Touch</h2>
                        <ContactForm />
                    </div>
                )}
            </TrackVisibility>
        </Col>
    );
};
