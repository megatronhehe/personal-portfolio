import React, { useState } from "react";

import { motion } from "framer-motion";

import {
	PiPlayFill,
	PiCode,
	PiCaretLeftBold,
	PiCaretRightBold,
	PiXLight,
} from "react-icons/pi";
import DescriptionSection from "./DescriptionSection";
import FeaturesSection from "./FeaturesSection";
const ProjectDetailsModal = ({ project, setShowInfo }) => {
	const [currImageIndex, setCurrImageIndex] = useState(0);
	const [selectedSection, setSelectedSection] = useState("DESCRIPTION");

	const imagesLength = project.image.length;

	const nextImage = () => {
		setCurrImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
	};

	const prevImage = () => {
		setCurrImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
	};

	const imageButtonsElement = project.image.map((image, i) => (
		<li
			onClick={() => setCurrImageIndex(i)}
			className={`w-2 h-2 rounded-xl cursor-pointer duration-200 ${
				currImageIndex === i ? "bg-blue-400 w-6" : "bg-gray-600 w-2"
			}`}
			key={image}
		></li>
	));

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setShowInfo(false)}
			className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full gap-2 p-6 bg-opacity-10 backdrop-filter backdrop-blur-sm"
		>
			<button className="flex items-center justify-center w-8 h-8 py-2 text-white duration-200 bg-red-400 rounded-full hover:bg-red-500 hover:scale-110">
				<PiXLight />
			</button>
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -30 }}
				onClick={(e) => e.stopPropagation()}
				className="relative flex flex-col w-full max-w-5xl text-sm bg-gray-100 shadow-lg dark:bg-gray-900 sm:gap-4 rounded-xl sm:flex-row"
			>
				<div className="relative flex flex-col items-center justify-center sm:w-4/6">
					<motion.img
						key={currImageIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						loading="lazy"
						alt={`preview image ${currImageIndex + 1}`}
						src={project.image[currImageIndex]}
						className="object-cover w-full rounded-lg aspect-square"
					/>
					<button
						onClick={prevImage}
						className="absolute flex items-center justify-center w-10 h-10 text-white duration-200 bg-black rounded-full -left-5 bg-opacity-60 backdrop-filter backdrop-blur-md hover:scale-110 hover:bg-opacity-40"
					>
						<PiCaretLeftBold />
					</button>

					<button
						onClick={nextImage}
						className="absolute flex items-center justify-center w-10 h-10 text-white duration-200 bg-black rounded-full -right-5 bg-opacity-60 backdrop-filter backdrop-blur-md hover:scale-110 hover:bg-opacity-40"
					>
						<PiCaretRightBold />
					</button>

					<div className="absolute bottom-0 flex flex-col items-center gap-1 px-3 py-1 text-xs font-semibold tracking-widest text-white bg-black rounded-t-xl">
						{currImageIndex + 1}/{imagesLength}
						<ul className="flex gap-2 ">{imageButtonsElement}</ul>
					</div>
				</div>

				<div className="flex flex-col gap-4 p-4 sm:w-2/6">
					<h1 className="pb-4 text-xl border-b border-gray-700">
						{project.title}
					</h1>
					<nav>
						<ul className="flex">
							<li
								onClick={() => setSelectedSection("DESCRIPTION")}
								className={`flex items-center border-b-2 duration-200 justify-center w-1/2 gap-2 py-1 ${
									selectedSection === "DESCRIPTION"
										? "border-blue-400"
										: "border-gray-800 "
								}`}
							>
								Description
							</li>
							<li
								onClick={() => setSelectedSection("FEATURES")}
								className={`flex items-center border-b-2 duration-200 justify-center w-1/2 gap-2 py-1 ${
									selectedSection === "FEATURES"
										? "border-blue-400"
										: "border-gray-800 "
								}`}
							>
								Features
							</li>
						</ul>
					</nav>

					{selectedSection === "DESCRIPTION" && (
						<DescriptionSection description={project.description} />
					)}
					{selectedSection === "FEATURES" && (
						<FeaturesSection features={project.features} />
					)}

					<ul className="flex">
						<li className="w-1/2">
							<a
								href={project.sc}
								target="_blank"
								className="flex items-center justify-center gap-2 py-1 duration-200 border border-gray-900 hover:rounded-xl hover:border-red-400 hover:scale-110 hover:text-red-400"
							>
								<PiPlayFill />
								Live demo
							</a>
						</li>
						<li className="w-1/2">
							<a
								href={project.sc}
								target="_blank"
								className="flex items-center justify-center gap-2 py-1 duration-200 border border-gray-900 hover:rounded-xl hover:border-blue-400 hover:scale-110 hover:text-blue-400"
							>
								<PiCode />
								Source code
							</a>
						</li>
					</ul>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default ProjectDetailsModal;
