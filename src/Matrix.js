import { useState, useEffect, useRef } from 'react'
import AnimateHeight from 'react-animate-height';
import RainStream from './RainSteam'

const Matrix = () => {

    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState(null);

    useEffect(() => {
        const boundingClientRect = containerRef.current.getBoundingClientRect();
        console.log(boundingClientRect)
        setContainerSize({
            width: boundingClientRect.width,
            height: boundingClientRect.height
        });
    }, [])
    const numOfRainStreams = containerSize ? Math.floor(containerSize.width /10) : 0;
    //where 26px is the width of a character of this font with size 50 (50 being the height in px of a char)
    return <div style={{
        background: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'ignore',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }}
    ref={containerRef}>
        {new Array(numOfRainStreams).fill().map((elem, idx)=> <RainStream key={idx} height={containerSize?.height}/>)}
    </div>
}

export default Matrix;