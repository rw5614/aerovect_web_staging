/* eslint-disable jsx-a11y/heading-has-content */
import React, {
    useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { Parallax, useParallaxController } from 'react-scroll-parallax';
import CountUp, { useCountUp } from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';

import './Technology.scss';

import arrowImg from '../../assets/Technology/arrowDown.svg';
import statsImg from '../../assets/Technology/stats.png';
import image1Img from '../../assets/Technology/image1.png';
import image2Img from '../../assets/Technology/image2.png';
import image3Img from '../../assets/Technology/image3.png';
import image4Img from '../../assets/Technology/image4.png';
import { HeaderColorData, ViewProps } from '../../App';

// @ts-ignore
import backgroundVideo from '../../assets/Technology/background.mp4';

const Technology: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    const parallaxController = useParallaxController();

    const handleLoad = () => parallaxController?.update();

    const screenHeight = window.innerHeight;

    const row1Ref = useRef<any>(null);
    const row2Ref = useRef<any>(null);
    const row3Ref = useRef<any>(null);
    const row4Ref = useRef<any>(null);

    const enterAnimation = (ref: React.MutableRefObject<any>) => {
        ref.current.classList.add('slideIn');
    };

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        // TODO: Get Screen height (dynamic), also do onResize;
        const scrolled = winScroll / window.innerHeight;

        const intro = document.getElementById('intro')!;
        const background = document.getElementById('background')!;
        const exploreMore = document.getElementById('exploreMore')!;

        if (scrolled < 1) {
            // Full Screen Positions
            intro.style.position = 'fixed';
            background.style.position = 'fixed';

            // Circle Size
            background.style.webkitMaskSize = `${scrolled * 300}%`;
            exploreMore.style.webkitMaskSize = '0%';
        } else if (scrolled >= 1 && scrolled < 2) {
            // Full Screen Positions
            background.style.position = 'fixed';
            exploreMore.style.position = 'fixed';

            // Circle Size
            background.style.webkitMaskSize = '300%';
            exploreMore.style.webkitMaskSize = `${(scrolled - 1) * 300}%`;

            // Explore More Position
            exploreMore.style.top = '0';
        } else {
            // Full Screen Positions
            intro.style.position = 'absolute';
            background.style.position = 'absolute';
            exploreMore.style.position = 'absolute';

            // Explore More Position
            exploreMore.style.top = '200vh';
        }
    };

    const degCU = useCountUp({
        start: 0,
        end: 360,
        duration: 0.5,
        ref: 'degree',
    });

    const senCU = useCountUp({
        start: 0,
        end: 10,
        duration: 0.5,
        ref: 'sensors',
    });

    const lidCU = useCountUp({
        start: 0,
        end: 1.2,
        duration: 0.5,
        ref: 'lidar',
        suffix: 'M',
    });

    const sysCU = useCountUp({
        start: 0,
        end: 5,
        duration: 0.5,
        ref: 'systems',
    });

    const [cuOnce, setCuOnce] = useState(false);

    const startCU = () => {
        if (!cuOnce) {
            degCU.start();
            senCU.start();
            lidCU.start();
            sysCU.start();
            setCuOnce(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);

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

        return (() => {
            window.removeEventListener('scroll', listenToScroll);
        });
    }, []);

    useLayoutEffect(() => {
        const handler = () => parallaxController?.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return (
        <div className="technologyContainer">

            <header className="intro" id="intro">
                <h1>
                    World&#8217;s most experienced airside driver.
                </h1>
            </header>

            <section className="background" id="background">
                <video playsInline autoPlay muted loop>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <h1>
                    World&#8217;s most experienced airside driver.
                </h1>
            </section>

            <section className="exploreMore" id="exploreMore">
                <h1>Explore More</h1>
                <img src={arrowImg} alt="down arrow" />
            </section>

            <section className="fullScreen" id="1" />
            <section className="fullScreen" id="2" />
            <section className="fullScreen" id="3" />

            <section className="statsContainer" id="4">
                <Parallax
                    translateY={['-300px', '0px']}
                    opacity={[0, 1]}
                    className="sensorContainer"
                    startScroll={screenHeight * 2.5}
                    endScroll={screenHeight * 3}
                >
                    <img src={statsImg} alt="sensors" onLoad={handleLoad} />
                </Parallax>

                <Parallax
                    translateY={['300px', '0px']}
                    opacity={[0, 1]}
                    startScroll={screenHeight * 2.5}
                    endScroll={screenHeight * 3}
                    onEnter={startCU}
                >
                    <div className="dataContainer">
                        <div className="dataPoint">
                            <h3 id="degree" />
                            <p>Degree Awareness</p>
                        </div>
                        <div className="dataPoint">
                            <h3 id="sensors" />
                            <p>Robust Sensors</p>
                        </div>
                        <div className="dataPoint">
                            <h3 id="lidar" />
                            <p>LiDAR Points Per Second</p>
                        </div>
                        <div className="dataPoint">
                            <h3 id="systems" />
                            <p>Redundant Systems</p>
                        </div>
                    </div>
                </Parallax>
            </section>

            <section className="imageCards">
                <Parallax onEnter={() => enterAnimation(row1Ref)}>
                    <div className="imageRow" ref={row1Ref}>
                        <div className="imageDesc">
                            <h4>Aviation First</h4>
                            <p>
                                Built Specifically and exclusively for the airside. The AeroVect Driver is
                                trained to recognize aircraft, GSE, and markings unique to the airport
                                environment, precisely navigating airside traffic rules.
                            </p>
                        </div>
                        <div className="image">
                            <img src={image1Img} alt="image1" />
                        </div>
                    </div>
                </Parallax>
                <Parallax onEnter={() => enterAnimation(row2Ref)}>
                    <div className="imageRow" ref={row2Ref}>
                        <div className="image">
                            <img src={image2Img} alt="image1" />
                        </div>
                        <div className="imageDesc">
                            <h4>Fully Extensible</h4>
                            <p>
                                Easily expand autonomy across stations. The AeroVect Driver is designed with
                                scalability in mind to support the transition from mixed human / autonomy
                                environments of today to the fully autonomous airside of tomorrow.
                            </p>
                        </div>
                    </div>
                </Parallax>
                <div className="banner banner1" />
                <Parallax onEnter={() => enterAnimation(row3Ref)}>
                    <div className="imageRow" ref={row3Ref}>
                        <div className="imageDesc">
                            <h4>Platform Agnostic</h4>
                            <p>
                                Integrate seamlessly with existing mixed fleets. The AeroVect Driver is
                                broadly compatible with GSE from all leading OEMs, delivering operational
                                certainty through reliable and predictable driverless operations.
                            </p>
                        </div>
                        <div className="image">
                            <img src={image3Img} alt="image1" />
                        </div>
                    </div>
                </Parallax>
                <Parallax onEnter={() => enterAnimation(row4Ref)}>
                    <div className="imageRow" ref={row4Ref}>
                        <div className="image">
                            <img src={image4Img} alt="image1" />
                        </div>
                        <div className="imageDesc">
                            <h4>Aviation First</h4>
                            <p>
                                Built Specifically and exclusively for the airside. The AeroVect Driver is
                                trained to recognize aircraft, GSE, and markings unique to the airport
                                environment, precisely navigating airside traffic rules.
                            </p>
                        </div>
                    </div>
                </Parallax>
                <div className="banner banner2" />
            </section>

            <section className="achievement">
                <header>
                    <Parallax
                        translateY={['0px', '0px']}
                        opacity={[0.5, 1]}
                    // startScroll={screenHeight * 4.5}
                    // endScroll={screenHeight * 5}
                    >
                        <h2>
                            {'Oh. So much '}
                            <span>data.</span>
                        </h2>
                    </Parallax>
                    <Parallax
                        translateY={['0px', '0px']}
                        opacity={[0.5, 1]}
                    // startScroll={screenHeight * 4.75}
                    // endScroll={screenHeight * 5}
                    >
                        <h3>Lots of high-quality data = smarter driver</h3>
                    </Parallax>
                    <Parallax
                        translateY={['0px', '0px']}
                        opacity={[0.5, 1]}
                    >
                        <p>
                            We built the world&rsquo;s
                            {' '}
                            <b>largest proprietary dataset of airside driving data,</b>
                            {' '}
                            using the AeroVect Explorer, our custom-built mapping kit that lets us build a
                            digital twin of a major airport in
                            {' '}
                            <b>less than 2 hours</b>
                            .
                        </p>
                    </Parallax>
                </header>
                <h3 className="last">
                    Oh, and we have already mapped half of America&apos;s top 10 airports.
                </h3>
            </section>
        </div>
    );
};

export default Technology;
