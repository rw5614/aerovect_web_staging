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
        <form
            className={`contactFormContainer ${dark ? 'darkMode' : ''}`}
            id="contact-form"
            action="https://formspree.io/xknqngvk"
            method="POST"
        >
            <input id="form_name" type="text" name="name" required placeholder="Name *" />
            <input id="form_email" type="email" name="email" required placeholder="Email *" />
            <input id="form_subject" type="text" name="subject" required placeholder="Subject" />
            <input id="form_company" type="text" name="company" required placeholder="Company" />
            <textarea id="form_message" name="message" required placeholder="Message *" />
            <div className="submitWrapper">
                <button type="submit" name="submit" id="submit">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;
