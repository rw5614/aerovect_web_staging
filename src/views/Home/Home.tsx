/* eslint-disable jsx-a11y/media-has-caption */
import React, {
    useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Parallax, useParallaxController } from 'react-scroll-parallax';
// @ts-ignore
import ModalVideo from 'react-modal-video';
import { HeaderColorData, ViewProps } from '../../App';
import roadAImg from '../../assets/Home/roadA.svg';
import roadASmallImg from '../../assets/Home/roadASmall.svg';
import roadBImg from '../../assets/Home/roadB.svg';
import roadBSmallImg from '../../assets/Home/roadBSmall.svg';
import tractorImg from '../../assets/Home/tractor.svg';
import tractorSmallImg from '../../assets/Home/tractorSmall.svg';

// @ts-ignore
import video from '../../assets/Home/video.mp4';

import './Home.scss';

const Home: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    const history = useHistory();
    const location = useLocation();
    const parallaxController = useParallaxController();

    const screenHeight = window.innerHeight;

    const [videoHeight, setVideoHeight] = useState(0);

    const [playVideo, setPlayVideo] = useState(false);
    const [vidModalOpen, setVidModalOpen] = useState(false);

    const ourMissionH2Ref = useRef<any>(null);
    const ourMissionPRef = useRef<any>(null);
    const ourMissionBtnRef = useRef<any>(null);

    const airsideDriverRef = useRef<any>(null);

    const navigate = (path: string) => {
        history.push(`/${path}`);
    };

    const enterAnimation = (ref: React.MutableRefObject<any>) => {
        ref.current.classList.add('slideIn');
    };

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        // TODO: Get Screen height (dynamic), also do onResize;
        const scrolled = winScroll / window.innerHeight;

        const airsideDriver = document.getElementById('airsideDriver')!;
        const footer = document.getElementById('footer')!;
        const getInTouch = document.getElementById('getInTouch')!;

        const asdTop = airsideDriver.getBoundingClientRect().top;
        const footerTop = footer.getBoundingClientRect().top;
        const gitBot = getInTouch.getBoundingClientRect().bottom;

        if (asdTop <= gitBot && footerTop > gitBot) {
            getInTouch.style.color = 'black';
        } else if (footerTop <= gitBot) {
            getInTouch.style.color = 'white';
        } else {
            getInTouch.style.color = 'white';
        }

        const ourMissionTop = ourMissionH2Ref.current.getBoundingClientRect().y;
        if (ourMissionTop <= 60) {
            ourMissionH2Ref.current.classList.add('slideOut');
            ourMissionPRef.current.classList.add('slideOut');
            ourMissionBtnRef.current.classList.add('slideOut');
        } else {
            ourMissionH2Ref.current.classList.remove('slideOut');
            ourMissionPRef.current.classList.remove('slideOut');
            ourMissionBtnRef.current.classList.remove('slideOut');
        }
    };

    useLayoutEffect(() => {
        const vid = document.getElementById('floatingVideo')!;
        // @ts-ignore
        if (playVideo) vid.play();
        // @ts-ignore
        else vid.pause();
    }, [playVideo]);

    useEffect(() => {
        if (vidModalOpen) setPlayVideo(false);
    }, [vidModalOpen]);

    const [tStartScroll, setTStartScroll] = useState(0);
    const [tEndScroll, setTEndScroll] = useState(0);

    const windowResized = () => {
        const getVideoHeight = () => {
            const floatingVideo = document.getElementById('floatingVideo')!;
            return floatingVideo.getBoundingClientRect().height;
        };
        setVideoHeight(getVideoHeight());

        const airsideDriver = document.getElementById('airsideDriver')!;
        const asdBox = airsideDriver.getBoundingClientRect();

        setTStartScroll(asdBox.y + asdBox.height / 4);
        setTEndScroll(asdBox.y + (asdBox.height * 3) / 4);
        window.addEventListener('scroll', listenToScroll);
        return (() => {
            window.removeEventListener('scroll', listenToScroll);
        });
    };

    useEffect(() => {
        window.addEventListener('resize', windowResized);
        windowResized();
        return (() => window.removeEventListener('resize', windowResized));
    }, []);

    useLayoutEffect(() => {
        const colorData: HeaderColorData[] = [];

        const heroContainer = document.getElementById('heroContainer')!;
        const ourMission = document.getElementById('ourMission')!;
        const airsideDriver = document.getElementById('airsideDriver')!;

        const curScroll = document.documentElement.scrollTop;
        const heroContainerTop = heroContainer.getBoundingClientRect().top;
        const ourMissionTop = ourMission.getBoundingClientRect().top;
        const airsideDriverTop = airsideDriver.getBoundingClientRect().top;

        colorData.push({
            top: heroContainerTop + curScroll - 60,
            color: false,
        });
        colorData.push({
            top: ourMissionTop + curScroll - 60,
            color: false,
        });
        colorData.push({
            top: airsideDriverTop + curScroll - 60,
            color: true,
        });
        colorData.push({
            top: document.body.scrollHeight,
            color: true,
        });

        changeColorData(colorData);
    }, [location]);

    const [widthPx, setWidthPx] = useState(0);
    useLayoutEffect(() => {
        setWidthPx(window.innerWidth);
    });

    return (
        <div className="homeContainer">
            <ModalVideo channel="youtube" autoplay isOpen={vidModalOpen} videoId="Rlv2mXYjLYo" onClose={() => setVidModalOpen(false)} />
            {/* Home */}
            <div className="getInTouch" id="getInTouch">
                <p>&#8592; Get in touch</p>
            </div>
            <section className="heroContainer" id="heroContainer">
                <h1>
                    World&#8217;s most advanced
                    <br />
                    automation technology for GSE.
                </h1>
                <div className="expandLine" />
                <h2>
                    Highly scalable, OEM agnostic self-driving software for
                    GSE, trusted by the world&#8217;s leading airlines and handlers.
                </h2>
            </section>

            <section className="ourMission" id="ourMission">
                <div
                    className="ourMissionText"
                >
                    <Parallax
                        onEnter={() => enterAnimation(ourMissionH2Ref)}
                    >
                        <h2 ref={ourMissionH2Ref}>Our mission</h2>
                    </Parallax>
                    <Parallax
                        onEnter={() => enterAnimation(ourMissionPRef)}
                    >
                        <p ref={ourMissionPRef}>
                            We started AeroVect to make ground handling dramatically safer,
                            more productive, and more sustainable. We do that with the AeroVect
                            Driver, the industry&apos;s most advanced OEM agnostic self-driving
                            software for GSE.
                        </p>
                    </Parallax>
                    <Parallax
                        onEnter={() => enterAnimation(ourMissionBtnRef)}
                    >
                        <button ref={ourMissionBtnRef} type="button" onClick={() => navigate('technology')}>Discover &gt;</button>
                    </Parallax>
                </div>
                <Parallax
                    translateY={['0px', `-${videoHeight / 2}px`]}
                    className="floatingVideoContainer"
                    startScroll={screenHeight}
                    endScroll={screenHeight * 1.5}
                    style={{ bottom: `${-videoHeight}px` }}
                    onEnter={() => setPlayVideo(false)}
                    onExit={() => setPlayVideo(true)}
                >
                    {/* <img id="floatingVideo" className="floatingVideo" src={videoImg} alt="video" onLoad={handleLoad} /> */}
                    <video id="floatingVideo" className="floatingVideo" playsInline autoPlay muted loop onClick={() => setVidModalOpen(true)}>
                        <source src={video} type="video/mp4" />
                    </video>
                </Parallax>
            </section>

            <section className="airsideDriver" id="airsideDriver" style={{ marginTop: `${videoHeight}px` }}>
                <div className="airsideDescription">
                    <Parallax
                        onEnter={() => enterAnimation(airsideDriverRef)}
                    >
                        <div ref={airsideDriverRef}>
                            <h2>
                                World&#8217;s most experienced
                                <br />
                                airside driver.
                            </h2>
                            <h3>
                                Meet the AeroVect Driver
                            </h3>
                            <p>
                                The premier self-driving technology for GSE.
                                Aviation-only, OEM agnostic, highly scalable.
                            </p>
                            <button type="button" onClick={() => navigate('technology')}>Learn more</button>
                        </div>
                    </Parallax>
                </div>
                <div className="road">
                    <div className="roadLeft">
                        <img src={widthPx >= 768 ? roadAImg : roadASmallImg} alt="leftRoad" />
                        <Parallax
                            translateY={['0px', widthPx >= 768 ? '-500px' : '-250px']}
                            easing="easeOutQuad"
                            shouldAlwaysCompleteAnimation
                            startScroll={tStartScroll}
                            endScroll={tEndScroll}
                        >
                            <img className="tractor" src={widthPx >= 768 ? tractorImg : tractorSmallImg} alt="tractor" />
                        </Parallax>
                    </div>
                    <img className="rightRoad" src={widthPx >= 768 ? roadBImg : roadBSmallImg} alt="rightRoad" />
                </div>
            </section>
        </div>
    );
};

export default Home;
