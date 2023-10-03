import React, { useState } from "react";

import { PiInfo, PiPlayFill, PiImageLight, PiCode } from "react-icons/pi";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { AnimatePresence } from "framer-motion";
import ProjectCardButton from "./ProjectCardButton";

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
						<ProjectCardButton icon={<PiPlayFill />} url={project.sc} />

						<ProjectCardButton icon={<PiImageLight />} setState={setShowInfo} />

						<ProjectCardButton icon={<PiCode />} url={project.sc} />
					</ul>

					<button
						onClick={() => setShowInfo(true)}
						className="absolute text-2xl text-gray-300 duration-200 top-2 right-2 hover:scale-110 hover:text-white"
					>
						<PiInfo />
						<PiInfo className="absolute top-0 animate-ping hover:animate-none" />
					</button>
				</div>
			</li>

			<AnimatePresence>
				{showInfo && (
					<ProjectDetailsModal project={project} setShowInfo={setShowInfo} />
				)}
			</AnimatePresence>
		</>
	);
};

export default ProjectCard;
