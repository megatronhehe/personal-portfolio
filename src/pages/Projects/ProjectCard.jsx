import React, { useState } from "react";

import { PiInfo, PiPlayFill, PiImageLight, PiCode } from "react-icons/pi";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectCard = ({ project }) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<>
			<li className="relative flex-shrink-0 w-full h-48 overflow-hidden bg-black sm:h-64 rounded-xl group">
				<img
					src={`../${project.logo}`}
					className="absolute top-0 left-0 object-cover w-full h-full duration-500 group-hover:scale-110"
				/>
				<div className="absolute top-0 left-0 flex flex-col items-center justify-center invisible w-full h-full gap-6 p-4 duration-500 bg-black opacity-0 bg-opacity-10 group-hover:bg-opacity-90 group-hover:visible group-hover:opacity-100">
					<h1 className="font-semibold text-center">{project.title}</h1>

					<ul className="absolute left-0 flex justify-between w-full text-sm bottom-4">
						<li className="flex justify-center w-1/3 text-2xl text-center">
							<PiPlayFill />
						</li>
						<li className="flex justify-center w-1/3 text-2xl text-center">
							<PiImageLight />
						</li>
						<li className="flex justify-center w-1/3 text-2xl text-center">
							<PiCode />
						</li>
					</ul>

					<button
						onClick={() => setShowInfo(true)}
						className="absolute text-2xl text-white duration-200 top-2 right-2 animate-bounce hover:animate-none"
					>
						<PiInfo />
					</button>
				</div>
			</li>

			{showInfo && (
				<ProjectDetailsModal project={project} setShowInfo={setShowInfo} />
			)}
		</>
	);
};

export default ProjectCard;
