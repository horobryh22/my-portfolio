import { ReactElement } from 'react';

export type ProjectType = {
    id: number;
    title: string;
    description: string | ReactElement;
    imgUrl: string;
    projectUrl: string;
    codeUrl: string;
};
