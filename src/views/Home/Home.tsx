import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Parallax, useParallaxController } from 'react-scroll-parallax';
import { HeaderColorData, ViewProps } from '../../App';
import roadAImg from '../../assets/Home/roadA.svg';
import roadBImg from '../../assets/Home/roadB.svg';
import tractorImg from '../../assets/Home/tractor.svg';
import videoImg from '../../assets/Home/video.jpg';
import './Home.scss';

const Home: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    const history = useHistory();
    const location = useLocation();
    const parallaxController = useParallaxController();

    const screenHeight = window.innerHeight;
    const handleLoad = () => parallaxController?.update();

    const [videoHeight, setVideoHeight] = useState(0);

    const navigate = (path: string) => {
        history.push(`/${path}`);
    };

    useEffect(() => {
        const getVideoHeight = () => {
            const floatingVideo = document.getElementById('floatingVideo')!;
            return floatingVideo.getBoundingClientRect().height;
        };
        setVideoHeight(getVideoHeight());
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

    return (
        <div className="homeContainer">
            {/* Home */}
            <div className="getInTouch">
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
                <Parallax
                    translateY={['0px', '-331px']}
                    opacity={[1, 0]}
                    className="ourMissionText"
                    startScroll={screenHeight}
                    endScroll={screenHeight * 1.5}
                >
                    <h2>Our mission</h2>
                    <p>
                        We started AeroVect to make ground handling dramatically safer,
                        more productive, and more sustainable. We do that with the AeroVect
                        Driver, the industry&apos;s most advanced OEM agnostic self-driving
                        software for GSE.
                    </p>
                    <button type="button" onClick={() => navigate('technology')}>Discover &gt;</button>
                </Parallax>
                <Parallax
                    translateY={['0px', `-${videoHeight / 2}px`]}
                    className="floatingVideoContainer"
                    startScroll={screenHeight}
                    endScroll={screenHeight * 1.5}
                >
                    <img id="floatingVideo" className="floatingVideo" src={videoImg} alt="video" onLoad={handleLoad} />
                </Parallax>
            </section>

            <section className="airsideDriver" id="airsideDriver">
                <div className="airsideDescription">
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
                <div className="road">
                    <div className="roadLeft">
                        <img src={roadAImg} alt="leftRoad" />
                        <Parallax
                            translateY={['0px', '-500px']}
                            className="floatingVideoContainer"
                            easing="easeOutQuint"
                            shouldAlwaysCompleteAnimation
                        >
                            <img className="tractor" src={tractorImg} alt="tractor" />
                        </Parallax>
                    </div>
                    <img className="rightRoad" src={roadBImg} alt="rightRoad" />
                </div>
            </section>
        </div>
    );
};

export default Home;
