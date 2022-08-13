import React from 'react';

import { Col } from 'react-bootstrap';
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

import { PromoText } from 'components/index';
import { PromoContentType } from 'components/promo/promoContent/types';
import { ReturnComponentType } from 'types';

export const PromoContent = ({ text }: PromoContentType): ReturnComponentType => {
    return (
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                {({ isVisible }) => (
                    <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                        <PromoText text={text} />
                        <div className="button-container">
                            <button className="custom-button" type="button">
                                Download CV <Download size={25} />
                            </button>
                            <button type="button" className="connect-button">
                                Let’s Connect <ArrowRightCircle size={25} />
                            </button>
                        </div>
                    </div>
                )}
            </TrackVisibility>
        </Col>
    );
};
