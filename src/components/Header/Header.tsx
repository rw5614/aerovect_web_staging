import React, { useEffect, useLayoutEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import { useHistory, useLocation } from 'react-router-dom';
import './Header.scss';

import logoImg from '../../assets/Header/logo.svg';
import logoColoredImg from '../../assets/Header/logoColored.svg';
import { HeaderColorData } from '../../App';

interface HeaderProps {
    colorData: HeaderColorData[];
}

const Header: React.FC<HeaderProps> = ({
    colorData,
}) => {
    const history = useHistory();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const [lastY, setLastY] = useState(0);
    const [dir, setDir] = useState(0);
    const [prevDir, setPrevDir] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    const [hasColor, setHasColor] = useState(false);

    const navigate = (path: string) => {
        setIsOpen(false);
        history.push(`/${path}`);
    };

    const getScrollPos = (tmpColorData: HeaderColorData[]) => {
        const curScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (tmpColorData.length > 1) {
            for (let i = 0; i < tmpColorData.length - 1; i += 1) {
                if (curScroll >= tmpColorData[i].top && curScroll < tmpColorData[i + 1].top) {
                    setHasColor(tmpColorData[i].color);
                }
            }
        }
        setLastY(curScroll);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setLastY(0);
    }, [location]);

    useEffect(() => {
        if (colorData.length > 0) setHasColor(colorData[0].color);
        window.addEventListener('scroll', () => getScrollPos(colorData));
        return (() => {
            window.removeEventListener('scroll', () => getScrollPos(colorData));
        });
    }, [colorData]);

    useEffect(() => {
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const curScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (curScroll > lastY) {
                setDir(2);
            } else if (curScroll < lastY) {
                setDir(1);
            }

            if (dir !== prevDir) {
                if (dir === 2) {
                    if (curScroll > 120) setShowHeader(false);
                } else if (dir === 1) {
                    setShowHeader(true);
                }
                setPrevDir(dir);
            }
        }, 250);
    }, [lastY]);

    return (
        <div
            className={
                `headerContainer ${showHeader ? 'showHeader' : ''
                } ${hasColor ? 'hasColor' : 'noColor'
                } ${lastY === 0 ? 'noBackground' : ''}
                `
            }
        >
            <header className="desktopHeader">
                {hasColor && <img src={logoColoredImg} alt="logo" onClick={() => navigate('home')} aria-hidden />}
                {!hasColor && <img src={logoImg} alt="logo" onClick={() => navigate('home')} aria-hidden />}
                <nav>
                    <button type="button" onClick={() => navigate('technology')}>Technology</button>
                    <button type="button" onClick={() => navigate('company')}>Company</button>
                    <button type="button" onClick={() => navigate('careers')}>Careers</button>
                    <button type="button" onClick={() => navigate('news')}>News</button>
                    <button type="button" onClick={() => navigate('contact')}>Contact Us</button>
                </nav>
            </header>
            <header className={`${isOpen ? 'mobileOpen mobileHeader' : 'mobileHeader'}`}>
                {hasColor && <img src={logoColoredImg} alt="logo" onClick={() => navigate('home')} aria-hidden />}
                {!hasColor && <img src={logoImg} alt="logo" onClick={() => navigate('home')} aria-hidden />}
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
                <nav>
                    <button type="button" onClick={() => navigate('technology')}>Technology</button>
                    <button type="button" onClick={() => navigate('company')}>Company</button>
                    <button type="button" onClick={() => navigate('careers')}>Careers</button>
                    <button type="button" onClick={() => navigate('news')}>News</button>
                    <button type="button" onClick={() => navigate('contact')}>Contact Us</button>
                </nav>
            </header>
        </div>
    );
};

export default Header;
