import React from "react";

const ProjectCardButton = ({ icon, url, setState }) => {
	const isUrlExist = url?.length > 0;

	const styledIcon = <div className="cursor-pointer">{icon}</div>;

	return (
		<li
			onClick={() => !isUrlExist && setState(true)}
			className="relative z-40 flex justify-center w-1/3 text-2xl text-center text-gray-300 duration-200 hover:text-white hover:scale-110"
		>
			<a href={url} target="_blank">
				{styledIcon}
			</a>
		</li>
	);
};

export default ProjectCardButton;
