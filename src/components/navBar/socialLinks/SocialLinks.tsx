import React from 'react';

import github from 'assets/img/skills/github.svg';
import instagram from 'assets/img/social/icon_instagram.svg';
import linkedin from 'assets/img/social/icon_linkedin.svg';
import { ReturnComponentType } from 'types';

export const SocialLinks = (): ReturnComponentType => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/hororbryh22/">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="https://github.com/horobryh22">
                <img src={github} alt="github" />
            </a>
        </div>
    );
};
