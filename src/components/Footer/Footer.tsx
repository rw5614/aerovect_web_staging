import React from 'react';
import { useHistory } from 'react-router-dom';
import emailImg from '../../assets/Footer/email.svg';
import facebookImg from '../../assets/Footer/facebook.svg';
import instagramImg from '../../assets/Footer/instagram.svg';
import linkedInImg from '../../assets/Footer/linkedIn.svg';
import phoneImg from '../../assets/Footer/phone.svg';
import twitterImg from '../../assets/Footer/twitter.svg';
import youtubeImg from '../../assets/Footer/youtube.svg';
import logoImg from '../../assets/Header/logo.svg';
import './Footer.scss';

const Footer: React.FC = () => {
    const history = useHistory();

    const navigate = (path: string) => {
        history.push(`/${path}`);
    };

    return (
        <footer className="footerContainer">
            <div className="footerUpper">
                <div className="footerBlock logoBlock">
                    <img src={logoImg} alt="logo" />
                    <p>
                        Built in Silicon Valley for
                        <br />
                        the global aviation industry
                    </p>
                </div>
                <div className="footerBlock addressBlock">
                    <h5>Headquarters</h5>
                    <address>
                        233 E Harris Ave
                        <br />
                        South San Francisco, CA
                        <br />
                        94080 USA
                    </address>
                </div>
                <div className="footerBlock contactBlock">
                    <h5>Contact</h5>
                    <div className="contactRow">
                        <img alt="phone" src={phoneImg} />
                        <a href="tel: +1415213-2878">(415) 213-2878</a>
                    </div>
                    <div className="contactRow">
                        <img alt="email" src={emailImg} />
                        <a href="mailto: info@aerovect.com">info@aerovect.com</a>
                    </div>
                </div>
                <nav className="footerBlock navBlock">
                    <button type="button" onClick={() => navigate('technology')}>Technology</button>
                    <button type="button" onClick={() => navigate('company')}>Company</button>
                    <button type="button" onClick={() => navigate('careers')}>Careers</button>
                    <button type="button" onClick={() => navigate('news')}>News</button>
                    <button type="button" onClick={() => navigate('contact')}>Contact Us</button>
                </nav>
            </div>
            <div className="footerBottom">
                <small>AeroVect Technologies Inc. &copy; 2020-2022</small>
                <div className="social">
                    <a href="2">
                        <img src={instagramImg} alt="instagram" />
                    </a>
                    <a href="2">
                        <img src={twitterImg} alt="twitter" />
                    </a>
                    <a href="2">
                        <img src={youtubeImg} alt="youtube" />
                    </a>
                    <a href="2">
                        <img src={linkedInImg} alt="linkedIn" />
                    </a>
                    <a href="2">
                        <img src={facebookImg} alt="facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
