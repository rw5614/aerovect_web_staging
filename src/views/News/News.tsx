import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import { saveAs } from 'file-saver';

import './News.scss';

import bannerImg from '../../assets/News/banner.png';
import cnbcImg from '../../assets/News/cnbc.svg';
import iataImg from '../../assets/News/iata.png';
import forbesImg from '../../assets/News/forbes.png';
import aviationProsImg from '../../assets/News/aviationPros.png';
import airsideIntImg from '../../assets/News/AirsideInt.png';
import readImg from '../../assets/News/read.png';

import mediaKit1 from '../../assets/News/mediaKit/1.jpg';
import mediaKit2 from '../../assets/News/mediaKit/2.jpg';
import mediaKit3 from '../../assets/News/mediaKit/3.jpg';
import mediaKit4 from '../../assets/News/mediaKit/4.jpg';
import mediaKit5 from '../../assets/News/mediaKit/5.jpg';
import mediaKit6 from '../../assets/News/mediaKit/6.jpg';
import mediaKit7 from '../../assets/News/mediaKit/7.jpg';
import mediaKit8 from '../../assets/News/mediaKit/8.jpg';
import mediaKit9 from '../../assets/News/mediaKit/9.jpg';

import downloadImg from '../../assets/News/download.png';
import { HeaderColorData, ViewProps } from '../../App';

const News: React.FC<ViewProps> = ({
    changeColorData,
}) => {
    const [coverageActive, setCoverageActive] = useState(true);

    const downloadImage = (url: string) => {
        saveAs(url, `${url}.jpg`); // Put your image url here.
    };

    useEffect(() => {
        setCoverageActive(true);
    }, []);

    useEffect(() => {
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
    }, []);

    return (
        <div className="newsContainer">
            <header id="1">
                <img src={bannerImg} alt="banner" />
            </header>
            <section className="news" id="2">
                <header>
                    <h3 aria-hidden onClick={() => setCoverageActive(true)}>Press Coverage</h3>
                    <div className="split" />
                    <h3 aria-hidden onClick={() => setCoverageActive(false)}>Press Media Kit</h3>
                    <div className={`underline ${!coverageActive ? 'right' : ''}`} />
                </header>
                {coverageActive && (
                    <div className="coverageList">
                        <div className="coverage">
                            <img src={airsideIntImg} alt="iata" />
                            <div className="article">
                                <h4>GAT to introduce autonomous airside driving technology</h4>
                                <p>June 15, 2022</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.airsideint.com/issue-article/gat-to-introduce-autonomous-airside-driving-technology/"
                            >
                                <p>Read</p>
                                <img src={readImg} alt="read" />
                            </a>
                        </div>
                        <div className="coverage">
                            <img src={aviationProsImg} alt="iata" />
                            <div className="article">
                                <h4>AeroVect and GAT Announce Industry-First Partnership to Deploy Autonomous Driving across US Airport Tarmacs</h4>
                                <p>March 18, 2022</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.aviationpros.com/gse/gse-technology/press-release/21260685/aerovect-technologies-inc-aerovect-and-gat-announce-first-partnership-in-america-to-deploy-autonomous-driving-across-us-airport-tarmacs?fbclid=IwAR3rqR1NltCl-J_-YXc4oLpDupHFMpALFe5FH4bKFUkqtiKpw8VKkMagWVw"
                            >
                                <p>Read</p>
                                <img src={readImg} alt="read" />
                            </a>
                        </div>
                        <div className="coverage">
                            <img src={iataImg} alt="iata" />
                            <div className="article">
                                <h4>AeroVect Delivers Keynote Panel at IATA Conference on Autonomous GSE</h4>
                                <p>December 18, 2021</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/posts/eugeniodonati_last-month-i-had-the-pleasure-of-speaking-activity-6879760905006039040-Q9UA?utm_source=linkedin_share&utm_medium=member_desktop_web"
                            >
                                <p>Read</p>
                                <img src={readImg} alt="read" />
                            </a>
                        </div>
                        <div className="coverage">
                            <img src={forbesImg} alt="cnbc" />
                            <div className="article">
                                <h4>AeroVect Founders Recognized Amongst Forbes Top 30 Under 30</h4>
                                <p>December 1, 2021</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.forbes.com/sites/amyfeldman/2021/12/01/30-under-30-manufacturing-industry-2022-young-innovators-entrepreneurs-materials-sustainability-software-robotics-logistics/?sh=110b9d1154f0"
                            >
                                <p>Read</p>
                                <img src={readImg} alt="read" />
                            </a>
                        </div>
                    </div>
                )}

                {!coverageActive && (

                    <div className="mediaKit">
                        <div className="mediaRow">
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit1} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit1)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit2} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit2)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit3} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit3)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                        </div>
                        <div className="mediaRow">
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit4} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit4)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit5} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit5)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit6} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit6)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                        </div>
                        <div className="mediaRow">
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit7} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit7)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit8} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit8)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                            <div className="media">
                                <img className="mediaKitImg" src={mediaKit9} alt="media" />
                                <div className="hoveredImg" aria-hidden onClick={() => downloadImage(mediaKit9)}>
                                    <img src={downloadImg} alt="download" />
                                </div>
                                {/* <p>Short Description</p> */}
                            </div>
                        </div>

                    </div>

                )}
            </section>
        </div>
    );
};

export default News;
