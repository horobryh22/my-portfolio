import React from 'react';

import { Col } from 'react-bootstrap';

import { ReturnComponentType } from 'types';

export type ProjectCardType = {
    title: string;
    description: string;
    imgUrl: string;
    url: string;
};

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    url,
}: ProjectCardType): ReturnComponentType => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="card" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <button
                        type="button"
                        onClick={() => {
                            window.open(url, '_blank');
                        }}
                    >
                        Open
                    </button>
                </div>
            </div>
        </Col>
    );
};
