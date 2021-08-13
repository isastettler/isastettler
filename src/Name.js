import SingleChar from "./SingleChar";
import HeaderInfo from "./HeaderInfo";

const FIRST_NAME = ["I", "S", "A", "B", "E", "L", "L", "E", " "];
const LAST_NAME = ["S", "T", "E", "T", "T", "L", "E", "R"];

const Name = () => {
	return (
		<div className="container">
			<div className="header-name">
				<div>
					{FIRST_NAME.map((char, idx) => (
						<SingleChar key={idx} char={char} />
					))}
				</div>
				<div>
					{LAST_NAME.map((char, idx) => (
						<SingleChar key={idx} char={char} />
					))}
				</div>
			</div>
			<div className="header">
				<HeaderInfo />
			</div>
		</div>
	);
};

export default Name;
