import { useState } from 'react';

const SingleChar = props => {
    const [style, setStyle] = useState('char-enter')
    setTimeout(() => {
        setStyle('char');
    }, 3000)
    return <span className={style}>{props.char}</span>
}

export default SingleChar;