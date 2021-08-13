import Project from "./Project";
const projectsArr = [
	"https://main.d2zbq6gy5n0x1t.amplifyapp.com/",
	"https://litcollective.herokuapp.com/",
	"https://one-big-ocean.herokuapp.com/",
];

const Projects = () => {
	return (
		<div className="container projects">
			{projectsArr.map((project, idx) => 
				<Project key={idx} project={project} />
			)}
		</div>
	);
};

export default Projects;
