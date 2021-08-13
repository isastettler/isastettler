import SingleChar from "./SingleChar";
import Projects from './Projects'

const contentArr = ["P", "R", "O", "J", "E", "C", "T", "S"];
const Content = () => {
	return (
        <div className="content">
			<div>
            {contentArr.map((char, idx) => <SingleChar key={idx} char={char}/>)}
			</div>
			<Projects />
		</div>
	);
};

export default Content;