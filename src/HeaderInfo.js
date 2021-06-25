import { useState } from 'react';
import Icon from './Icon';

const HeaderInfo = () => {
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
