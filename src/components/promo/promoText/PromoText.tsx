import React from 'react';

import { PromoTextType } from './types';

import { ReturnComponentType } from 'types';

export const PromoText = ({ text }: PromoTextType): ReturnComponentType => {
    return (
        <>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
                Hi! I&apos;m Ilya <br />
                <span
                    className="txt-rotate"
                    data-period="1000"
                    data-rotate='[ "Frontend Developer"]'
                >
                    <span className="wrap">{text}</span>
                </span>
            </h1>
            <p />
        </>
    );
};
