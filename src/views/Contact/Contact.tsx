import React, { useEffect } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HeaderColorData, ViewProps } from '../../App';
import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.scss';

const Contact: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    useEffect(() => {
        const colorData: HeaderColorData[] = [];

        const section1 = document.getElementById('1')!;
        const section2 = document.getElementById('2')!;
        const section3 = document.getElementById('3')!;

        const curScroll = document.documentElement.scrollTop;
        const top1 = section1.getBoundingClientRect().top;

        colorData.push({
            top: top1 + curScroll - 60,
            color: false,
        });
        colorData.push({
            top: document.body.scrollHeight,
            color: false,
        });

        changeColorData(colorData);
    }, []);
    return (
        <div className="contactContainer" id="1">
            <header>
                <h1>Get in touch with us.</h1>
                <ContactForm dark />
            </header>
        </div>
    );
};

export default Contact;
