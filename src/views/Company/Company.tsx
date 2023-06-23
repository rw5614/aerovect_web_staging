import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { HeaderColorData, ViewProps } from '../../App';
import timeline1Img from '../../assets/Company/Timeline_1.jpg';
import timeline2Img from '../../assets/Company/Timeline_2.jpg';
import timeline3Img from '../../assets/Company/Timeline_3.jpg';
import timeline4Img from '../../assets/Company/Timeline_4.jpg';
import timeline5Img from '../../assets/Company/Timeline_5.jpg';
import './Company.scss';

const Company: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    const history = useHistory();
    const navigate = (path: string) => {
        history.push(`/${path}`);
    };

    const timeline1Ref = useRef<any>(null);
    const timeline2Ref = useRef<any>(null);
    const timeline3Ref = useRef<any>(null);
    const timeline4Ref = useRef<any>(null);
    const timeline5Ref = useRef<any>(null);

    const enterAnimation = (ref: React.MutableRefObject<any>) => {
        ref.current.classList.add('slideIn');
    };

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        // TODO: Get Screen height (dynamic), also do onResize;
        const scrolled = winScroll / window.innerHeight;

        const intro = document.getElementById('intro')!;
        const background = document.getElementById('background')!;
        const storyHeading = document.getElementById('storyHeading')!;

        const timelineDot = document.getElementById('timelineDot')!;
        const timelineDotTop = timelineDot.getBoundingClientRect().top;

        const timelineLine = document.getElementById('timelineLine')!;

        const dot5Top = document.getElementById('dot5')!.getBoundingClientRect().top;

        if (scrolled < 1) {
            // Full Screen Positions
            intro.style.position = 'fixed';
            background.style.position = 'fixed';

            // Circle Size
            background.style.webkitMaskSize = `${300 - (scrolled * 300)}%`;
            timelineDot.style.opacity = '0';
            intro.style.top = '0';
        } else if (scrolled >= 1) {
            // Full Screen Positions
            intro.style.position = 'absolute';
            background.style.position = 'absolute';

            // Circle Size
            background.style.webkitMaskSize = '0%';
            intro.style.top = '100vh';
            timelineDot.style.opacity = '1';
            timelineDot.style.top = `${storyHeading.getBoundingClientRect().top + 150}px`;
            timelineLine.style.height = `${dot5Top - timelineDotTop}px`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        const colorData: HeaderColorData[] = [];

        const section1 = document.getElementById('1')!;
        const section2 = document.getElementById('2')!;

        const curScroll = document.documentElement.scrollTop;
        const top1 = section1.getBoundingClientRect().top;
        const top2 = section2.getBoundingClientRect().top;

        colorData.push({
            top: top1 + curScroll - 60,
            color: false,
        });
        colorData.push({
            top: top2 + curScroll - 60,
            color: true,
        });
        colorData.push({
            top: document.body.scrollHeight,
            color: true,
        });

        changeColorData(colorData);

        return (() => {
            window.removeEventListener('scroll', listenToScroll);
        });
    }, []);
    return (
        <div className="companyContainer">
            <header className="intro" id="intro">
                <h1 id="storyHeading"> </h1>
            </header>
            <section className="background" id="background">
                <h1>Our Company</h1>
            </section>
            <div
                // startScroll={1080 * 1.25}
                // endScroll={1080 * 1.5}
                // opacity={[0, 1]}
                id="timelineDot"
            >
                <div id="timelineLine" />
            </div>
            {/* <Parallax onChange={(e) => console.log(e)}>
                <div className="test">123</div>
            </Parallax> */}
            {/* Placeholders */}
            <div className="fullScreen" id="1" />
            <div className="fullScreen" id="2" />

            <Parallax className="timelineParallax" onEnter={() => enterAnimation(timeline1Ref)}>
                <div className="halfScreen" ref={timeline1Ref}>
                    <div className="right" id="timeline1">
                        <div className="dot" id="dot1" />
                        <div className="line" />
                        <div className="imageTimeline">
                            <img src={timeline1Img} alt="img" />
                            <div className="imageDesc">
                                <h4>June 2020</h4>
                                <p>
                                    Raymond and Eugenio start AeroVect in a garage
                                    <br />
                                    right after graduating from Harvard
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <Parallax className="timelineParallax" onEnter={() => enterAnimation(timeline2Ref)}>
                <div className="halfScreen" ref={timeline2Ref}>
                    <div className="left" id="timeline2">
                        <div className="imageTimeline">
                            <img src={timeline2Img} alt="img" />
                            <div className="imageDesc">
                                <h4>September 2020</h4>
                                <p>
                                    First demo at regional airport, just 3 months
                                    <br />
                                    after starting the company
                                </p>
                            </div>
                        </div>
                        <div className="line" />
                        <div className="dot" id="dot2" />
                    </div>
                </div>
            </Parallax>

            <Parallax className="timelineParallax" onEnter={() => enterAnimation(timeline3Ref)}>
                <div className="halfScreen" ref={timeline3Ref}>
                    <div className="right" id="timeline3">
                        <div className="dot" id="dot3" />
                        <div className="line" />
                        <div className="imageTimeline">
                            <img src={timeline3Img} alt="img" />
                            <div className="imageDesc">
                                <h4>Fall 2021</h4>
                                <p>
                                    Showcased AeroVect&apos;s OEM-agnostic retrofit technology
                                    <br />
                                    at the GSE industry&apos;s premier annual event in Las Vegas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <Parallax className="timelineParallax" onEnter={() => enterAnimation(timeline4Ref)}>
                <div className="halfScreen" ref={timeline4Ref}>
                    <div className="left" id="timeline4">
                        <div className="imageTimeline">
                            <img src={timeline4Img} alt="img" />
                            <div className="imageDesc">
                                <h4>2021</h4>
                                <p>
                                    Built digital twins of the world&apos;s largest airports using
                                    <br />
                                    our proprietary mapping technology
                                </p>
                            </div>
                        </div>
                        <div className="line" />
                        <div className="dot" id="dot4" />
                    </div>
                </div>
            </Parallax>

            <Parallax className="timelineParallax" onEnter={() => enterAnimation(timeline5Ref)}>
                <div className="halfScreen" ref={timeline5Ref}>
                    <div className="right" id="timeline5">
                        <div className="dot" id="dot5" />
                        <div className="line" />
                        <div className="imageTimeline">
                            <img src={timeline5Img} alt="img" />
                            <div className="imageDesc">
                                <h4>2022+</h4>
                                <p>
                                    Active deployments at multiple US hubs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className="joinUs">
                <h3>
                    We&apos;re taking off. Hop onboard -
                    <br />
                    <button type="button" onClick={() => navigate('careers')}>Join us.</button>
                </h3>
            </div>
        </div>
    );
};

export default Company;
