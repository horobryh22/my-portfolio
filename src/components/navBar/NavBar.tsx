import React, { useEffect, useState } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import './NavBar.css';

import facebook from 'assets/img/icon_facebook.svg';
import instagram from 'assets/img/icon_instagram.svg';
import linkedin from 'assets/img/icon_linkedin.svg';
import logo from 'assets/img/logo.svg';
import { ReturnComponentType } from 'types';

const SCROLL_Y = 50;

export const NavBar = (): ReturnComponentType => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (activeLink: string): void => {
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
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === 'home'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={
                                activeLink === 'about'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === 'skills'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === 'projects'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#1">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="#2">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="#3">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </div>
                        <button className="vvd" type="button">
                            <span>Let&apos;s Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
