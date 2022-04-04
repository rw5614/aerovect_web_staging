import React, { useEffect } from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import './Careers.scss';

import gradientImg from '../../assets/Careers/gradient.svg';
import companyImg from '../../assets/Careers/company.png';

import bannerImg from '../../assets/Careers/banner.jpg';

import vacationImg from '../../assets/Careers/vacation.svg';
import paidImg from '../../assets/Careers/paid.svg';
import globalImg from '../../assets/Careers/global.svg';
import ownershipImg from '../../assets/Careers/ownership.svg';
import snacksImg from '../../assets/Careers/snacks.svg';

import medicalImg from '../../assets/Careers/medical.svg';
import travelImg from '../../assets/Careers/travel.svg';
import innovationImg from '../../assets/Careers/innovation.svg';

import applyImg from '../../assets/Careers/apply.png';

import ContactForm from '../../components/ContactForm/ContactForm';
import { HeaderColorData, ViewProps } from '../../App';

const Careers: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    useEffect(() => {
        const colorData: HeaderColorData[] = [];

        const section1 = document.getElementById('1')!;
        const section2 = document.getElementById('2')!;
        const section3 = document.getElementById('3')!;

        const curScroll = document.documentElement.scrollTop;
        const top1 = section1.getBoundingClientRect().top;
        const top2 = section2.getBoundingClientRect().top;
        const top3 = section3.getBoundingClientRect().top;

        colorData.push({
            top: top1 + curScroll - 60,
            color: true,
        });
        colorData.push({
            top: top2 + curScroll - 60,
            color: false,
        });
        colorData.push({
            top: top3 + curScroll - 60,
            color: true,
        });
        colorData.push({
            top: document.body.scrollHeight,
            color: true,
        });

        changeColorData(colorData);
    }, []);
    return (
        <div className="careersContainer" id="1">
            <header>
                <h1>Build your career at AeroVect.</h1>
                <h2>Shape global aviation.</h2>
                <p className="headerP">
                    At AeroVect, we automate logistics at some of the busiest passenger and cargo airports
                    in the world. Backed by top-tier investors, AeroVect is shaping the future of airport automation,
                    beginning with self-driving baggage and cargo tractors.
                    <br />
                    <br />
                    If you have a passion for applying autonomous driving
                    technologies to impact the flow of goods for millions of people, we want to talk
                    to you! Browse our open opportunities below or reach out directly to our team.
                </p>
            </header>

            <header className="mobileDesc">
                <p>
                    At AeroVect, we automate logistics at some of the busiest passenger and cargo airports
                    in the world. Backed by top-tier investors, AeroVect is shaping the future of airport automation,
                    beginning with self-driving baggage and cargo tractors.
                    <br />
                    <br />
                    If you have a passion for applying autonomous driving
                    technologies to impact the flow of goods for millions of people, we want to talk
                    to you! Browse our open opportunities below or reach out directly to our team.
                </p>
            </header>

            {/* <ParallaxBanner
                layers={[
                    {
                        image: bannerImg,
                        speed: -20,
                    },
                ]}
                style={{ aspectRatio: '3 / 1' }}
                id="2"
            /> */}
            <div className="banner" id="2" />

            <section className="benefitsSection" id="3">
                <Parallax
                    opacity={[0.5, 1]}
                    easing="easeOutExpo"
                    className="groupedImg"
                >
                    <img className="gradientImg" src={gradientImg} alt="gradient" />
                    <div className="circleImgWrapper">
                        <img className="circleImg" src={companyImg} alt="company" />
                    </div>
                </Parallax>
                <Parallax
                    className="benefits"
                    opacity={[0.5, 1]}
                    translateX={['200px', '0px']}
                    easing="easeOutExpo"
                >
                    <h3>
                        AeroVect is here to support your journey.
                    </h3>
                    <div className="benefitsList">
                        <div className="benefitsCol">
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={vacationImg} alt="vacation" />
                                </div>
                                <p>Flexible vacation</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={paidImg} alt="paid" />
                                </div>
                                <p>Paid Holidays</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={globalImg} alt="global" />
                                </div>
                                <p>Global Impact</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={ownershipImg} alt="ownership" />
                                </div>
                                <p>Significant project ownership</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={snacksImg} alt="snacks" />
                                </div>
                                <p>Meals &amp; Snacks</p>
                            </div>
                        </div>
                        <div className="benefitsCol">
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={medicalImg} alt="medical" />
                                </div>
                                <p>Medical Coverage</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={paidImg} alt="equity" />
                                </div>
                                <p>Equity for all employees</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={travelImg} alt="travel" />
                                </div>
                                <p>Travel across the world</p>
                            </div>
                            <div className="benefit">
                                <div className="imgWrapper">
                                    <img src={innovationImg} alt="innovation" />
                                </div>
                                <p>Bleeding edge of innovation</p>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>

            <section className="rolesSection">
                <h3>Open Roles</h3>
                <div className="rolesContainer">
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Staff Autonomy Engineer</h4>
                            <p>
                                San Francisco, CA
                                {' '}
                                <span className="divide">|</span>
                                {' '}
                                Full-time
                            </p>
                        </div>
                        <div className="apply">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://jobs.ashbyhq.com/aerovect/8e2f8a0a-e242-451a-9789-819d49a3056c"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Senior Planning Engineer (Autonomy)</h4>
                            <p>
                                San Francisco, CA
                                {' '}
                                <span className="divide">|</span>
                                {' '}
                                Full-time
                            </p>
                        </div>
                        <div className="apply">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://jobs.ashbyhq.com/aerovect/95ed0425-17d7-4bc5-9bf3-bac95a67c508"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Robotics Engineer (Generalist)</h4>
                            <p>
                                San Francisco, CA
                                {' '}
                                <span className="divide">|</span>
                                {' '}
                                Full-time
                            </p>
                        </div>
                        <div className="apply">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://jobs.ashbyhq.com/aerovect/d82dfaaa-72de-4c7f-9219-381a5861b25c"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Vehicle Integration Engineer - Electrical Systems</h4>
                            <p>
                                San Francisco, CA
                                {' '}
                                <span className="divide">|</span>
                                {' '}
                                Full-time
                            </p>
                        </div>
                        <div className="apply">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://jobs.ashbyhq.com/aerovect/10948b92-644c-4a1e-abf5-a6387aa8d90a"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Infrastructure Engineer</h4>
                            <p>
                                San Francisco, CA
                                {' '}
                                <span className="divide">|</span>
                                {' '}
                                Full-time
                            </p>
                        </div>
                        <div className="apply">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://jobs.ashbyhq.com/aerovect/ddd69113-24f7-4a99-b2a5-7f6208bd2c78"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Autonomy Intern</h4>
                            <p>
                                San Francisco, CA
                                {' '}
                                <span className="divide">|</span>
                                {' '}
                                Full-time
                            </p>
                        </div>
                        <div className="apply">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://jobs.ashbyhq.com/aerovect/f8798bfb-8ff4-437f-827b-0f7cd318a680"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h1>Don&apos;t see an opening that fits?</h1>
                <h2>Get in touch.</h2>
                <ContactForm dark={false} />
            </section>
        </div>
    );
};

export default Careers;
