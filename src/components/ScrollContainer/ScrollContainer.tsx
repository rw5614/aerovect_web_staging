import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

interface ScrollContainerProps {
    className: string;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
    children,
    className,
}) => {
    const [scrollEl, setScrollElement] = React.useState<HTMLDivElement | undefined>(undefined);
    const ref = React.useRef<HTMLDivElement>() as any;

    React.useEffect(() => {
        setScrollElement(ref.current);
        console.log(ref.current);
    });

    return (
        <div className={className} ref={ref}>
            <ParallaxProvider scrollContainer={scrollEl}>
                {children}
            </ParallaxProvider>
        </div>
    );
};

export default ScrollContainer;
