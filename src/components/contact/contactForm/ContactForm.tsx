import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { ContactFromType } from './types';

import { sendMail } from 'api';
import { FormDataType, ReturnComponentType } from 'types';

export const ContactForm = ({ setIsDataSent }: ContactFromType): ReturnComponentType => {
    const { register, handleSubmit, reset } = useForm<FormDataType>();

    const [buttonText] = useState('Send');

    const onSubmit = async (data: FormDataType): Promise<void> => {
        await sendMail(data);
        setIsDataSent(true);
        setTimeout(() => {
            setIsDataSent(false);
        }, 6000);
        reset();
    };

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
                    <textarea
                        {...register('message')}
                        style={{ resize: 'none' }}
                        rows={6}
                        placeholder="Message"
                    />
                    <button type="submit">
                        <span>{buttonText}</span>
                    </button>
                </Col>
            </Row>
        </form>
    );
};
