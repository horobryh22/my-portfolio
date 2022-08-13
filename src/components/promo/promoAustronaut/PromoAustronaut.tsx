import React from 'react';

import { Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

import headerImg from 'assets/img/background/header-img.svg';
import { ReturnComponentType } from 'types';

export const PromoAustronaut = (): ReturnComponentType => {
    return (
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                {({ isVisible }) => (
                    <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                        <img src={headerImg} alt="Header Img" />
                    </div>
                )}
            </TrackVisibility>
        </Col>
    );
};
