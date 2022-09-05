import React, { useState } from 'react';

import { Col } from 'react-bootstrap';

import { ContactForm, HelperText } from 'components';
import { ReturnComponentType } from 'types';

export const ContactContent = (): ReturnComponentType => {
    const [isDataSent, setIsDataSent] = useState(false);

    return (
        <Col size={12} md={6} className="align-items-center">
            <div>
                {isDataSent ? (
                    <HelperText />
                ) : (
                    <>
                        <h2>Get In Touch</h2>
                        <ContactForm setIsDataSent={setIsDataSent} />
                    </>
                )}
            </div>
        </Col>
    );
};
