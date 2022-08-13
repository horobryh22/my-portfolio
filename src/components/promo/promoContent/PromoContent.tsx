import React from 'react';

import { Col } from 'react-bootstrap';
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';

import { PromoContentType } from './types';

import CV from 'assets/cv/cv.pdf';
import { PromoText } from 'components';
import { ReturnComponentType } from 'types';

export const PromoContent = ({ text }: PromoContentType): ReturnComponentType => {
    const handleClick = (): void => {
        document.location = '#connect';
    };

    return (
        <Col xs={12} md={6} xl={7}>
            <PromoText text={text} />
            <div className="button-container">
                <a href={CV} download>
                    <button className="button" type="button">
                        Download CV <Download size={25} />
                    </button>
                </a>
                <button type="button" className="button" onClick={handleClick}>
                    Let’s Connect <ArrowRightCircle size={25} />
                </button>
            </div>
        </Col>
    );
};
