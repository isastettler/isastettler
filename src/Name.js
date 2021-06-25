import SingleChar from './SingleChar';
import HeaderInfo from './HeaderInfo';

const FIRST_NAME = ['I', 'S', 'A', 'B', 'E', 'L', 'L', 'E', ' '];
const LAST_NAME = ['S', 'T', 'E', 'T', 'T', 'L', 'E', 'R'];

const Name = () => {
    return <div className='container'><div className='header'>
        {FIRST_NAME.map((char, idx) => <SingleChar key={idx} char={char}/>)}
        {LAST_NAME.map((char, idx) => <SingleChar key={idx} char={char}/>)}
        </div>
        <div className='header'>
            <HeaderInfo />
        </div>
        </div>
}

export default Name;