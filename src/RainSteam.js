import { useState, useEffect } from 'react';
import useInterval from 'react-useinterval';


const VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789$+-*/="#&_(),.;:?!\\|{}<>[]^~';
const STREAM_MUTATION_ODD = 0.04;

const MIN_PADDING = -30;
const MAX_PADDING = 30;

const MIN_STREAM_LENGHT = 4;
const MAX_STREAM_LENGTH = 10;

const MIN_INTERVAL_DEALY = 0;
const MAX_INTERVAL_DELAY = 80;

const MIN_DEALY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 800;


const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getRandomChar = () => VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));
const getRandomSteam = () => new Array(getRandomRange(MIN_STREAM_LENGHT, MAX_STREAM_LENGTH)).fill().map(elem => getRandomChar());

const getMutatedStream = stream => {
    const newStream = [];
    for(let i = 1; i < stream.length; i++){
        if(Math.random() < STREAM_MUTATION_ODD){
            newStream.push(getRandomChar());
        } else {
            newStream.push(stream[i]);
        }
    }
    newStream.push(getRandomChar());
    return newStream;
}
const RainStream = props => {
    const radomPadding = getRandomRange(MIN_PADDING, MAX_PADDING)
    const [stream, setStream] = useState(getRandomSteam())
    const [topPadding, setTopPadding] = useState(stream.length * -30);
    const [style, setStyle] = useState('matrix-rain');
    const [intervalDelay, setIntervalDelay] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setIntervalDelay(getRandomRange(MIN_INTERVAL_DEALY, MAX_INTERVAL_DELAY));
        }, getRandomRange(MIN_DEALY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS))
    }, []);

    useInterval(() => {
        if(!props.height) return;
        if(!intervalDelay) return;
        if(topPadding > props.height){
            setStream([]);
            const newStream = getRandomSteam();
            setStream(newStream);
            setTopPadding(stream.length * radomPadding)
            setIntervalDelay(null);
            setTimeout(
                () => setIntervalDelay(
                    getRandomRange(MIN_INTERVAL_DEALY, MAX_INTERVAL_DELAY)
                ),
                getRandomRange(MIN_DEALY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS)
            );
        } else {
            setTopPadding(topPadding + 26);
            setStream(getMutatedStream)
        }
    }, intervalDelay);

    setTimeout(() => {
        setStyle('matrix-rain-end');
    }, 8000)

    return <div className={style} style={{
        marginTop: topPadding,
        color: '#8F00FF',
        textShadow: '0px 0px 8px rgba(176, 38, 255, 0.8)'
    }}>{stream.map((char, idx) => <span key={idx} style={{
        color: idx === stream.length - 1 ? '#fff' : undefined,
        textShadow: idx === stream.length - 1 ? '0px 0px 8px rgba(255, 255, 255, 1)' : undefined,
        opacity: idx < 6 ? 0.1 + idx * 0.15 : 1,
    }}>{char}</span>)}</div>
}

export default RainStream;
