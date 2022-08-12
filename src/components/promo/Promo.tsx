import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

import 'animate.css';

import headerImg from 'assets/img/header-img.svg';
import { ReturnComponentType } from 'types';

export const Promo = (): ReturnComponentType => {
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [, setIndex] = useState(1);
    const period = 2000;
    const [delay, setDelay] = useState(300 - Math.random() * 100);

    const tick = (): void => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelay(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelay(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelay(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delay);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        Hi! I&apos;m Ilya{' '}
                                        <span
                                            className="txt-rotate"
                                            data-period="1000"
                                            data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been the
                                        standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.
                                    </p>
                                    <button type="button">
                                        Let’s Connect <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__zoomIn'
                                            : ''
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
