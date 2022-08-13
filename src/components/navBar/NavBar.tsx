import React, { useEffect, useState } from 'react';

import { Container, Navbar } from 'react-bootstrap';

import './NavBar.css';
import logo from 'assets/img/header-logo.svg';
import { PageLinks, SocialLinks } from 'components';
import { ActiveLinkType, ReturnComponentType } from 'types';

const SCROLL_Y = 50;

export const NavBar = (): ReturnComponentType => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState<ActiveLinkType>('home');

    const onUpdateActiveLink = (activeLink: ActiveLinkType): void => {
        setActiveLink(activeLink);
    };

    useEffect(() => {
        const onScroll = (): void => {
            if (window.scrollY > SCROLL_Y) {
                setScrolled(true);

                return;
            }
            setScrolled(false);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return (
        <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <PageLinks
                        activeLink={activeLink}
                        onUpdateActiveLink={onUpdateActiveLink}
                    />
                    <span className="navbar-text">
                        <SocialLinks />
                        <a href="#connect">
                            <button className="nvb-button" type="button">
                                <span>Let&apos;s Connect</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
