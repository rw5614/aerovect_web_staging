import React, { useLayoutEffect } from 'react';
import { useParallaxController } from 'react-scroll-parallax';

const ParallaxCache: React.FC = () => {
    const parallaxController = useParallaxController();

    useLayoutEffect(() => {
        const handler = () => parallaxController?.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return null;
};

export default ParallaxCache;
