import { useState, useEffect, useRef } from 'react'
import './index.css';
import RainStream from './RainSteam'
import Name from './Name'

const Matrix = () => {

    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState(null);
    const [style, setStyle] = useState('matrix');

    useEffect(() => {
        const boundingClientRect = containerRef.current.getBoundingClientRect();
        setContainerSize({
            width: boundingClientRect.width,
            height: boundingClientRect.height
        });
    }, [])
    const numOfRainStreams = containerSize ? Math.floor(containerSize.width /10) : 0;

    setTimeout(() => {
        setStyle('matrix-half');
    }, 7000)
    //where 26px is the width of a character of this font with size 50 (50 being the height in px of a char)
    return <div 
    className={`${style}`}
    ref={containerRef}>
        {new Array(numOfRainStreams).fill().map((elem, idx)=> <RainStream key={idx} height={containerSize?.height}/>)}
        <Name />
    </div>
}

export default Matrix;