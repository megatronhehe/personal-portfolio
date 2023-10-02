import React, { useState } from "react";

import {} from "react-icons/pi";

import {
	PiInfo,
	PiPlayFill,
	PiImageLight,
	PiCode,
	PiCaretLeftBold,
	PiCaretRightBold,
} from "react-icons/pi";
const ProjectDetailsModal = ({ project, setShowInfo }) => {
	const [currImageIndex, setCurrImageIndex] = useState(0);

	const imagesLength = project.image.length;

	const nextImage = () => {
		setCurrImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
	};

	const prevImage = () => {
		setCurrImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
	};

	return (
		<div
			onClick={() => setShowInfo(false)}
			className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full p-8 bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="flex flex-col w-full max-w-4xl gap-4 text-sm bg-gray-800 rounded-xl sm:flex-row"
			>
				<div className="relative flex flex-col items-center justify-center sm:w-4/6">
					<img
						src={project.image[currImageIndex]}
						className="object-cover w-full rounded-lg aspect-square"
					/>
					<button
						onClick={prevImage}
						className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full -left-5 bg-opacity-60 backdrop-filter backdrop-blur-md"
					>
						<PiCaretLeftBold />
					</button>
					<button
						onClick={nextImage}
						className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full -right-5 bg-opacity-60 backdrop-filter backdrop-blur-md"
					>
						<PiCaretRightBold />
					</button>

					<div className="absolute px-3 py-1 text-sm font-semibold tracking-widest bg-black bottom-2 rounded-xl">
						{currImageIndex + 1}/{imagesLength}
					</div>
				</div>

				<div className="flex flex-col justify-around gap-4 p-4 sm:w-2/6">
					<h1 className="text-xl">{project.title}</h1>
					<p>{project.description}</p>
					<ul>
						{project.features.map((feature, i) => (
							<li key={i}>- {feature}</li>
						))}
					</ul>
					<ul className="flex gap-2">
						<li className="w-1/2 ">
							<a
								href=""
								className="flex flex-col items-center justify-center gap-2 p-2 text-red-400 duration-200 border border-red-400 rounded-xl hover:animate-pulse hover:scale-105"
							>
								<PiPlayFill className="text-xl" />
								<span className="font-normal ">Live demo</span>
							</a>
						</li>
						<li className="w-1/2 ">
							<a
								href={project.sc}
								target="_blank"
								className="flex flex-col items-center justify-center gap-2 p-2 text-blue-400 duration-200 border border-blue-400 rounded-xl hover:animate-pulse hover:scale-105"
							>
								<PiCode className="text-xl " />
								<span className="font-normal ">Source code</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsModal;
