import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import './ContactForm.scss';

interface ContactFormProps {
    dark: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
    dark,
}) => {
    const t = '';
    return (
        <div className={`contactFormContainer ${dark ? 'darkMode' : ''}`}>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <input placeholder="Message" />
            <div className="submitWrapper">
                <button type="button">Send Message</button>
            </div>
        </div>
    );
};

export default ContactForm;
