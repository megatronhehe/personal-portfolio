import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
	PiCaretDown,
	PiCaretUp,
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
			<AnimatePresence>
				{toggleShow && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute top-0 left-0 z-10 flex flex-col items-center justify-between w-full h-full p-6 text-white bg-gray-700 bg-opacity-75"
					>
						<h2 className="font-semibold">{title}</h2>
						<p>{description}</p>
						<h3>Check it out!</h3>
						<ul className="flex ">
							<motion.li
								whileHover={{ scale: 1.1 }}
								className="flex flex-col items-center justify-center gap-2 px-3 py-1 text-center cursor-pointer "
							>
								<PiPlayFill className="w-10 h-10 p-2 text-white bg-red-300 rounded-full" />
								Live Demo
							</motion.li>

							<motion.li
								whileHover={{ scale: 1.1 }}
								onClick={() => setToggleModal(true)}
								className="flex flex-col items-center justify-center gap-2 px-3 py-1 text-center cursor-pointer "
							>
								<PiImageLight className="w-10 h-10 p-2 text-gray-400 bg-white rounded-full" />
								Image Preview
							</motion.li>

							<motion.li whileHover={{ scale: 1.1 }}>
								<a
									href={sc}
									target="_blank"
									className="flex flex-col items-center justify-center gap-2 px-3 py-1 text-center cursor-pointer "
								>
									<PiCodeBlockLight className="w-10 h-10 p-2 text-white bg-blue-300 rounded-full" />
									Source Code
								</a>
							</motion.li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>

			<motion.button
				whileHover={{ scale: 1.1 }}
				onClick={() => {
					setToggleShow((prev) => !prev);
				}}
				className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl text-black bg-white bg-opacity-50 rounded-md top-2 right-2"
			>
				{toggleShow ? <PiCaretUp /> : <PiCaretDown />}
			</motion.button>

			<AnimatePresence>
				{toggleModal && (
					<PreviewImageModal image={image} setToggleModal={setToggleModal} />
				)}
			</AnimatePresence>
		</li>
	);
};

export default ProjectCard;
