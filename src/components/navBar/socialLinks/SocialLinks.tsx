import React from 'react';

import facebook from 'assets/img/social/icon_facebook.svg';
import instagram from 'assets/img/social/icon_instagram.svg';
import linkedin from 'assets/img/social/icon_linkedin.svg';
import { ReturnComponentType } from 'types';

export const SocialLinks = (): ReturnComponentType => {
    return (
        <div className="social-icon">
            <a href="components/navBar/socialLinks/SocialLinks#1">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="components/navBar/socialLinks/SocialLinks#2">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="components/navBar/socialLinks/SocialLinks#3">
                <img src={facebook} alt="facebook" />
            </a>
        </div>
    );
};
