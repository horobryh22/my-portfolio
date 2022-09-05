import React from 'react';

import './Contact.css';

import { Container, Row } from 'react-bootstrap';

import { ContactContent, ContactImage } from 'components';
import { ReturnComponentType } from 'types';

export const Contact = (): ReturnComponentType => {
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-flex-start">
                    <ContactImage />
                    <ContactContent />
                </Row>
            </Container>
        </section>
    );
};
