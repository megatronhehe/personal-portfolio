import React, { useState } from "react";
import {
	PiCaretDown,
	PiPlayFill,
	PiImageLight,
	PiCodeBlockLight,
} from "react-icons/pi";
import PreviewImageModal from "./PreviewImageModal";

const ProjectCard = ({ project }) => {
	const [toggleShow, setToggleShow] = useState(false);
	const [toggleModal, setToggleModal] = useState(false);

	const { title, description, image, logo, sc } = project;
	return (
		<li className="relative flex-shrink-0 w-full overflow-hidden rounded-lg">
			<img src={logo} className="w-full" />
			{toggleShow && (
				<div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-between w-full h-full p-6 text-white bg-gray-700 bg-opacity-75">
					<h2 className="font-semibold">{title}</h2>
					<p>{description}</p>
					<h3>Check it out!</h3>
					<ul className="flex ">
						<li className="flex flex-col items-center justify-center gap-2 px-3 py-1 text-center">
							<PiPlayFill className="w-10 h-10 p-2 text-white bg-red-300 rounded-full" />
							Live Demo
						</li>
						<li
							onClick={() => setToggleModal(true)}
							className="flex flex-col items-center justify-center gap-2 px-3 py-1 text-center"
						>
							<PiImageLight className="w-10 h-10 p-2 text-gray-400 bg-white rounded-full" />
							Image Preview
						</li>
						<li className="flex flex-col items-center justify-center gap-2 px-3 py-1 text-center">
							<PiCodeBlockLight className="w-10 h-10 p-2 text-white bg-blue-300 rounded-full" />
							Image Preview
						</li>
					</ul>
				</div>
			)}
			<button
				onClick={() => {
					setToggleShow((prev) => !prev);
				}}
				className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl text-black bg-white bg-opacity-50 rounded-md top-1 right-1"
			>
				<PiCaretDown />
			</button>

			{toggleModal && (
				<PreviewImageModal image={image} setToggleModal={setToggleModal} />
			)}
		</li>
	);
};

export default ProjectCard;
