import React from 'react';

import { Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

import contactImg from 'assets/img/background/contact-img.svg';
import { ReturnComponentType } from 'types';

export const ContactImage = (): ReturnComponentType => {
    return (
        <Col size={12} md={6}>
            <TrackVisibility>
                {({ isVisible }) => (
                    <img
                        className={isVisible ? 'animate__animated' : ''}
                        src={contactImg}
                        alt="Contact Us"
                    />
                )}
            </TrackVisibility>
        </Col>
    );
};
