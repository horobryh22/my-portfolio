import React, { useEffect, useState } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import classes from './NavBar.module.css';

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
        <Navbar
            expand="md"
            className={`${classes.navbar} ${scrolled ? classes.scrolled : ''}`}
        >
            <Container className={classes.container}>
                <Navbar.Brand href="#home" className={classes.navbarBrand}>
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                {/* <Navbar.Toggle */}
                {/*    aria-controls="basic-navbar-nav" */}
                {/*    className={classes.navbarToggler} */}
                {/* > */}
                {/*    <span className={classes.togglerIcon} /> */}
                {/* </Navbar.Toggle> */}
                <Navbar.Collapse id="basic-navbar-nav" className={classes.navbarCollapse}>
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={`${classes.defaultLink} ${
                                activeLink === 'home' ? classes.activeLink : ''
                            }`}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={`${classes.defaultLink} ${
                                activeLink === 'about' ? classes.activeLink : ''
                            }`}
                            onClick={() => onUpdateActiveLink('about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={`${classes.defaultLink} ${
                                activeLink === 'skills' ? classes.activeLink : ''
                            }`}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={`${classes.defaultLink} ${
                                activeLink === 'projects' ? classes.activeLink : ''
                            }`}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className={classes.navbarText}>
                        <div className={classes.socialIcon}>
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
                        <button
                            className={classes.navbarButton}
                            type="button"
                            onClick={() => console.log('connect')}
                        >
                            <span>Let&apos;s Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
