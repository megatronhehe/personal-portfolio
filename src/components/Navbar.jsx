import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import InfoModal from "./InfoModal";

import NavbarButton from "./NavbarButton";

import {
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

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToTop = () => {
		setSectionIndex(0);
	};

	const scrollToBottom = () => {
		setSectionIndex(sectionsArray.length - 1);
	};

	useEffect(() => {
		scrollToSection(sectionsArray[sectionIndex]);
	}, [sectionIndex]);

	return (
		<>
			<motion.button
				key={toggleNavbar}
				animate={{ rotate: 180 }}
				onClick={() => setToggleNavbar((prev) => !prev)}
				className="fixed z-40 flex items-center justify-center text-2xl text-blue-300 bg-white border rounded-full sm:text-4xl w-11 h-11 sm:w-16 sm:h-16 bottom-1 right-1"
			>
				<PiSquaresFourFill />
			</motion.button>

			<nav className="fixed z-20 flex items-center justify-center top-1 right-1">
				<ul className="flex flex-col">
					<motion.li
						onClick={scrollToTop}
						className="flex items-center justify-center w-8 h-8 bg-white border cursor-pointer sm:w-12 sm:h-12 rounded-t-xl hover:bg-blue-300 hover:border-white hover:text-white"
					>
						<PiCaretDoubleUpLight />
					</motion.li>
					<motion.li
						onClick={scrollToBottom}
						className="flex items-center justify-center w-8 h-8 bg-white border cursor-pointer sm:w-12 sm:h-12 rounded-b-xl hover:bg-blue-300 hover:border-white hover:text-white"
					>
						<PiCaretDoubleDownLight />
					</motion.li>
				</ul>
			</nav>

			<AnimatePresence>
				{toggleNavbar && (
					<motion.div
						initial={{ y: 40 }}
						animate={{ y: 0 }}
						exit={{ y: 40 }}
						className="fixed bottom-0 left-0 z-30 flex items-center justify-center w-full "
					>
						<nav>
							<ul className="flex items-center justify-between w-64 h-10 px-4 text-gray-700 bg-white border sm:w-96 sm:h-12 rounded-t-xl backdrop-filter bg-opacity-60 backdrop-blur-md">
								<NavbarButton
									sectionName="Home"
									icon={<PiHouseLight />}
									index={0}
									sectionIndex={sectionIndex}
									setSectionIndex={setSectionIndex}
								/>

								<NavbarButton
									sectionName="About"
									icon={<PiUserLight />}
									index={1}
									sectionIndex={sectionIndex}
									setSectionIndex={setSectionIndex}
								/>

								<NavbarButton
									sectionName="Contact"
									icon={<PiEnvelopeLight />}
									index={2}
									sectionIndex={sectionIndex}
									setSectionIndex={setSectionIndex}
								/>

								<NavbarButton
									sectionName="Info"
									icon={<PiInfoLight />}
									sectionIndex={sectionIndex}
									setSectionIndex={setSectionIndex}
									setToggleInfoModal={setToggleInfoModal}
								/>
							</ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{toggleInfoModal && (
					<InfoModal setToggleInfoModal={setToggleInfoModal} />
				)}
			</AnimatePresence>
		</>
	);
};

{
	/* <nav className="fixed z-40 bottom-2 left-2">
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
			</nav> */
}

export default Navbar;
