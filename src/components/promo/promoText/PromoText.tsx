import React from 'react';

import { PromoTextType } from 'components/promo/promoText/types';
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
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type
                specimen book.
            </p>
        </>
    );
};
