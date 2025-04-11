import './App.scss';

import React, { useEffect, useState } from 'react';
import {
    HashRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Company from './views/Company/Company';
import Home from './views/Home/Home';
import Technology from './views/Technology/Technology';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Careers from './views/Careers/Careers';
import Contact from './views/Contact/Contact';
import News from './views/News/News';
import PrivacyPolicyPdf from './assets/Privacy/AeroVect Technologies, Inc. - Privacy Policy [V1.2].pdf';

export interface HeaderColorData {
    top: number;
    color: boolean;
}
export interface ViewProps {
    changeColorData: (colorData: HeaderColorData[]) => void;
}

const App = () => {
    const [headerColorData, setHeaderColorData] = useState<HeaderColorData[]>([]);

    const changeColorData = (colorData: HeaderColorData[]) => setHeaderColorData(colorData);

    return (
        <div className="App">
            {/* <SmoothProvider skew={false}> */}
            <ParallaxProvider>
                <Router>
                    <Switch>
                        <Route path="/privacy">
                            <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                                <iframe
                                    title="Privacy Policy"
                                    src={PrivacyPolicyPdf}
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                />
                            </div>
                        </Route>
                        <Route>
                            <>
                                <Header colorData={headerColorData} />
                                <Switch>
                                    <Route path="/news">
                                        <News
                                            changeColorData={changeColorData}
                                        />
                                    </Route>
                                    <Route path="/contact">
                                        <Contact
                                            changeColorData={changeColorData}
                                        />
                                    </Route>
                                    <Route path="/careers">
                                        <Careers
                                            changeColorData={changeColorData}
                                        />
                                    </Route>
                                    <Route path="/company">
                                        <Company
                                            changeColorData={changeColorData}
                                        />
                                    </Route>
                                    <Route path="/technology">
                                        <Technology
                                            changeColorData={changeColorData}
                                        />
                                    </Route>
                                    <Route path="/home">
                                        <Home
                                            changeColorData={changeColorData}
                                        />
                                    </Route>
                                    <Route path="/">
                                        <Redirect to="/home" />
                                    </Route>
                                </Switch>
                                <Footer />
                            </>
                        </Route>
                    </Switch>
                </Router>
            </ParallaxProvider>
            {/* </SmoothProvider> */}
        </div>
    );
};

export default App;
