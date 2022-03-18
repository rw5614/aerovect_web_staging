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
                    At AeroVect, we automate baggage and cargo logistics at some of the busiest
                    passenger airports and air freight hubs in the world. Backed by top-tier
                    investors, AeroVect is shaping the future of airport automation, beginning with
                    self-driving tow tractors.
                    <br />
                    <br />
                    If you have a passion for applying autonomous driving
                    technologies to impact the flow of goods for millions of people, we want to talk
                    to you! Browse our open opportunities below or reach out directly to our team.
                </p>
            </header>

            <header className="mobileDesc">
                <p>
                    At AeroVect, we automate baggage and cargo logistics at some of the busiest
                    passenger airports and air freight hubs in the world. Backed by top-tier
                    investors, AeroVect is shaping the future of airport automation, beginning with
                    self-driving tow tractors.
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
                                href="https://jobs.smartrecruiters.com/AeroVect/743999798723067-infrastructure-engineer"
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
                                href="https://jobs.smartrecruiters.com/AeroVect/743999779645450-robotics-engineer-generalist-"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
                    <div className="role">
                        <div className="roleDesc">
                            <h4>Vehicle Integration Engineer (Mechatronics)</h4>
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
                                href="https://jobs.smartrecruiters.com/AeroVect/743999757612989-vehicle-integration-engineer-mechatronics-"
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
                                href="https://jobs.smartrecruiters.com/AeroVect/743999789664734-senior-planning-engineer-autonomy-"
                            >
                                <p>Apply</p>
                                <img src={applyImg} alt="apply" />
                            </a>
                        </div>
                    </div>
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
                                href="https://jobs.smartrecruiters.com/AeroVect/743999779089120-staff-autonomy-engineer"
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
                                href="https://jobs.smartrecruiters.com/AeroVect/743999725988642-autonomy-intern"
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
