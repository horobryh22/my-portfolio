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
                I&apos;m from Russia and I really like programming! You can see my CV
                below and we&apos;ll get to know each other better!
            </p>
        </>
    );
};
