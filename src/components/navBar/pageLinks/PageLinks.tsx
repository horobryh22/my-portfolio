import React from 'react';

import { Nav } from 'react-bootstrap';

import { PageLinksType } from 'components/navBar/pageLinks/types';
import { LinkType, ReturnComponentType } from 'types';

export const PAGE_LINKS: LinkType[] = [
    {
        id: 1,
        name: 'Home',
        link: 'home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        link: 'about',
        href: '#about',
    },
    {
        id: 3,
        name: 'Skills',
        link: 'skills',
        href: '#skills',
    },
    {
        id: 4,
        name: 'Projects',
        link: 'projects',
        href: '#projects',
    },
];

export const PageLinks = ({
    activeLink,
    onUpdateActiveLink,
}: PageLinksType): ReturnComponentType => {
    const mappedLinks = PAGE_LINKS.map(link => {
        return (
            <Nav.Link
                key={link.id}
                href={link.href}
                className={
                    activeLink === link.link ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink(link.link)}
            >
                {link.name}
            </Nav.Link>
        );
    });

    return <Nav className="ms-auto">{mappedLinks}</Nav>;
};
