import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import InfoModal from "./InfoModal";

import {
	PiCaretDownLight,
	PiCaretUpLight,
	PiCaretDoubleUpLight,
	PiCaretDoubleDownLight,
	PiSquaresFourFill,
	PiHouseLight,
	PiUserLight,
	PiEnvelopeLight,
	PiInfoLight,
} from "react-icons/pi";
import {} from "react-icons/pi";

const Navbar = ({ sectionIndex, setSectionIndex }) => {
	const sectionsArray = ["home", "about", "contact"];

	const [toggleNavbar, setToggleNavbar] = useState(false);
	const [toggleInfoModal, setToggleInfoModal] = useState(false);

	const nextSection = () => {
		const newIndex = (sectionIndex + 1) % sectionsArray.length;
		setSectionIndex(newIndex);
		scrollToSection(sectionsArray[newIndex]);
	};

	const prevSection = () => {
		const newIndex =
			sectionIndex === 0 ? sectionsArray.length - 1 : sectionIndex - 1;
		setSectionIndex(newIndex);
		scrollToSection(sectionsArray[newIndex]);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		scrollToSection(sectionsArray[sectionIndex]);
	}, [sectionIndex]);

	return (
		<>
			<nav className="fixed z-40 bottom-2 right-2">
				<motion.button
					whileHover={{ scale: 1.1, y: -10 }}
					onClick={nextSection}
				>
					{sectionIndex === sectionsArray.length - 1 ? (
						<PiCaretDoubleUpLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					) : (
						<PiCaretDownLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					)}
				</motion.button>
			</nav>

			<nav className="fixed z-40 top-2 right-2">
				<motion.button
					whileHover={{ scale: 1.1, y: -10 }}
					onClick={prevSection}
				>
					{sectionIndex === 0 ? (
						<PiCaretDoubleDownLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					) : (
						<PiCaretUpLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					)}
				</motion.button>
			</nav>

			<nav className="fixed z-40 bottom-2 left-2">
				<ul className="flex flex-col-reverse justify-center gap-2">
					<motion.li
						whileHover={{ scale: 1.1 }}
						onClick={() => setToggleNavbar((prev) => !prev)}
						className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-white border shadow-md sm:h-20 sm:w-20 sm:text-4xl rounded-xl"
					>
						<motion.div
							whileHover={{ rotate: 180 }}
							transition={{ duration: 0.5 }}
							className="flex items-center justify-center w-full h-full"
						>
							<PiSquaresFourFill />
						</motion.div>
					</motion.li>

					<AnimatePresence>
						{toggleNavbar && (
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								className="flex flex-col-reverse gap-2"
							>
								<motion.li
									whileHover={{ scale: 1.1, y: -10 }}
									onClick={() => setToggleInfoModal(true)}
									className="flex items-center justify-center w-10 h-10 text-2xl text-white bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
								>
									<PiInfoLight />
								</motion.li>

								<motion.li
									whileHover={{ scale: 1.1, y: -10 }}
									onClick={() => setSectionIndex(2)}
									className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
								>
									<PiEnvelopeLight />
								</motion.li>

								<motion.li
									whileHover={{ scale: 1.1, y: -10 }}
									onClick={() => setSectionIndex(1)}
									className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
								>
									<PiUserLight />
								</motion.li>

								<motion.li
									whileHover={{ scale: 1.1, y: -10 }}
									onClick={() => setSectionIndex(0)}
									className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
								>
									<PiHouseLight />
								</motion.li>
							</motion.div>
						)}
					</AnimatePresence>
				</ul>
			</nav>

			<AnimatePresence>
				{toggleInfoModal && (
					<InfoModal setToggleInfoModal={setToggleInfoModal} />
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
