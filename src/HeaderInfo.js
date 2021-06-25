import { useState } from 'react';
import Icon from './Icon';

const gitHub = require('simple-icons/icons/github');
const linkedIn = require('simple-icons/icons/linkedin');

const HeaderInfo = () => {
    console.log(gitHub.svg)
    const [style, setStyle] = useState('header-info-enter')
    setTimeout(() => {
        setStyle('header-info')
    }, 5000)
    return <div>
            <div className={`${style}`}>POWERHOUSE WITH MAD LOVE FOR CODE</div>
            <Icon />
        </div>
}

export default HeaderInfo;
