import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { FormDataType } from './types';

import { ReturnComponentType } from 'types';

export const ContactForm = (): ReturnComponentType => {
    const { register, handleSubmit } = useForm<FormDataType>();

    const onSubmit = (data: FormDataType): void => {
        console.log(data);
    };

    const [buttonText] = useState('Send');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col size={12} sm={6} className="px-1">
                    <input {...register('firstName')} placeholder="First Name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                    <input {...register('lastName')} placeholder="Last Name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                    <input {...register('email')} placeholder="Email Address" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                    <input {...register('phone')} placeholder="Phone No." />
                </Col>
                <Col size={12} className="px-1">
                    <textarea {...register('message')} rows={6} placeholder="Message" />
                    <button type="submit">
                        <span>{buttonText}</span>
                    </button>
                </Col>
            </Row>
        </form>
    );
};
