import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';

import './Promo.css';

import 'animate.css';

import { PromoAustronaut, PromoContent } from 'components';
import { ReturnComponentType } from 'types';

export const Promo = (): ReturnComponentType => {
    const toRotate = ['Frontend Developer'];
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
    }, [tick]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <PromoContent text={text} />
                    <PromoAustronaut />
                </Row>
            </Container>
        </section>
    );
};
