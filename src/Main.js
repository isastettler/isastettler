import { useState } from "react";
import Content from './Content';

const Main = () => {
	const [style, setStyle] = useState("main");
	setTimeout(() => {
		setStyle("main-half");
	}, 7000);
	return (
        <div className={`${style}`}>
            <Content />
		</div>
	);
};

export default Main;
