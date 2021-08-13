const Project = (props) => {
    const { project } = props
	return (
		<div>
			<a href={`${project}`}>project</a>
		</div>
	);
};

export default Project;
