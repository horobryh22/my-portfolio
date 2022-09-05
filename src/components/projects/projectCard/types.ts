import { ReactElement } from 'react';

export type ProjectCardType = {
    title: string;
    description: string | ReactElement;
    imgUrl: string;
    projectUrl: string;
    codeUrl: string;
};
