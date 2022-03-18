import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

        const dot1Top = document.getElementById('dot1')!.getBoundingClientRect().top;
        const dot2Top = document.getElementById('dot2')!.getBoundingClientRect().top;
        const dot3Top = document.getElementById('dot3')!.getBoundingClientRect().top;
        const dot4Top = document.getElementById('dot4')!.getBoundingClientRect().top;
        const dot5Top = document.getElementById('dot5')!.getBoundingClientRect().top;

        const timeline1 = document.getElementById('timeline1')!;
        const timeline2 = document.getElementById('timeline2')!;
        const timeline3 = document.getElementById('timeline3')!;
        const timeline4 = document.getElementById('timeline4')!;
        const timeline5 = document.getElementById('timeline5')!;

        if (scrolled >= (1 + (300 / window.innerHeight))) {
            storyHeading.style.position = 'fixed';
            storyHeading.style.top = '150px';
        } else {
            storyHeading.style.position = 'relative';
            storyHeading.style.top = 'initial';
        }

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
        }
        if (scrolled >= (2 - (300 / window.innerHeight))) {
            storyHeading.style.color = 'black';
            console.log(123);
        } else {
            storyHeading.style.color = 'white';
        }

        if (dot1Top <= timelineDotTop) {
            timeline1.style.opacity = '0';
        } else {
            timeline1.style.opacity = '1';
        }

        if (dot2Top <= timelineDotTop) {
            timeline2.style.opacity = '0';
        } else {
            timeline2.style.opacity = '1';
        }
        if (dot3Top <= timelineDotTop) {
            timeline3.style.opacity = '0';
        } else {
            timeline3.style.opacity = '1';
        }
        if (dot4Top <= timelineDotTop) {
            timeline4.style.opacity = '0';
            timelineLine.style.height = `${dot5Top - timelineDotTop}px`;
        } else {
            timeline4.style.opacity = '1';
        }
        if (dot5Top <= timelineDotTop) {
            timeline5.style.opacity = '0';
            timelineLine.style.height = '0';

            storyHeading.style.opacity = '0';
            timelineDot.style.opacity = '0';
        } else {
            timeline5.style.opacity = '1';

            storyHeading.style.opacity = '1';
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
                <h1 id="storyHeading">Our Story</h1>
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

            <div className="fullScreen">
                <div className="right" id="timeline1">
                    <div className="dot" id="dot1" />
                    <div className="line" />
                    <div className="imageTimeline">
                        <img src={timeline1Img} alt="img" />
                        <div className="imageDesc">
                            <h4>June 2020</h4>
                            <p>
                                Raymond and Eugenio start AeroVect in a garage in
                                <br />
                                Sunnyvale right after graduating from Harvard
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fullScreen">
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

            <div className="fullScreen">
                <div className="right" id="timeline3">
                    <div className="dot" id="dot3" />
                    <div className="line" />
                    <div className="imageTimeline">
                        <img src={timeline3Img} alt="img" />
                        <div className="imageDesc">
                            <h4>October 2021</h4>
                            <p>
                                Showcased AeroVect&apos;s OEM-agnostic retrofit technology
                                <br />
                                at the GSE industry&apos;s premier annual event in Las Vegas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fullScreen">
                <div className="left" id="timeline4">
                    <div className="imageTimeline">
                        <img src={timeline4Img} alt="img" />
                        <div className="imageDesc">
                            <h4>Fall 2021</h4>
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

            <div className="fullScreen">
                <div className="right" id="timeline5">
                    <div className="dot" id="dot5" />
                    <div className="line" />
                    <div className="imageTimeline">
                        <img src={timeline5Img} alt="img" />
                        <div className="imageDesc">
                            <h4>2022</h4>
                            <p>
                                Deployment - Stay tuned!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="joinUs">
                <h3>
                    Think you are a good fit for the team?
                    <br />
                    <button type="button" onClick={() => navigate('careers')}>Join us.</button>
                </h3>
            </div>
        </div>
    );
};

export default Company;
