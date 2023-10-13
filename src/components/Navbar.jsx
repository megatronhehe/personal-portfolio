import React, { useContext, useState } from "react";

import ThemeContext from "../context/ThemeContext";

import { AnimatePresence, motion } from "framer-motion";

import InfoModal from "./InfoModal";

import NavbarButton from "./NavbarButton";

import {
	PiSquaresFourFill,
	PiHouseLight,
	PiHouseFill,
	PiUserLight,
	PiUserFill,
	PiStackLight,
	PiStackFill,
	PiEnvelopeLight,
	PiEnvelopeFill,
	PiInfoLight,
	PiMoonFill,
	PiSunFill,
} from "react-icons/pi";
import {} from "react-icons/pi";

const Navbar = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	const [toggleNavbar, setToggleNavbar] = useState(true);
	const [toggleInfoModal, setToggleInfoModal] = useState(false);

	return (
		<>
			<motion.button
				key={darkMode}
				animate={{ rotate: 360 }}
				whileHover={{ scale: 1.2 }}
				onClick={() => setDarkMode((prev) => !prev)}
				className={`fixed z-40 flex items-center justify-center text-2xl  bg-white border rounded-full dark:border-gray-600 dark:bg-gray-800 sm:text-4xl w-11 h-11 sm:w-16 sm:h-16 top-1 left-1 ${
					darkMode ? "text-blue-200" : "text-yellow-300"
				}`}
			>
				{darkMode ? <PiMoonFill /> : <PiSunFill />}
			</motion.button>

			<motion.button
				key={toggleNavbar ? "on" : "off"}
				animate={{ rotate: 90 }}
				whileHover={{ scale: 1.2 }}
				onClick={() => setToggleNavbar((prev) => !prev)}
				className="fixed z-40 flex items-center justify-center text-2xl text-blue-300 bg-white border rounded-full dark:border-gray-600 dark:bg-gray-800 sm:text-4xl w-11 h-11 sm:w-16 sm:h-16 bottom-1 right-1"
			>
				<PiSquaresFourFill />
			</motion.button>

			<button
				onClick={() => setToggleInfoModal((prev) => !prev)}
				className="fixed z-40 flex items-center justify-center text-2xl text-blue-300 sm:text-4xl top-2 right-2"
			>
				<PiInfoLight />
			</button>

			<AnimatePresence>
				{toggleNavbar && (
					<motion.div
						initial={{ y: 80 }}
						animate={{ y: 0 }}
						exit={{ y: 80 }}
						transition={{ type: "tween" }}
						className="fixed bottom-0 left-0 z-30 flex items-center justify-center w-full "
					>
						<nav>
							<ul className="flex items-center justify-between w-64 h-10 px-4 text-gray-700 transition-colors duration-1000 bg-white border dark:border-gray-600 dark:bg-gray-800 sm:w-96 sm:h-12 rounded-t-xl dark:text-gray-200 backdrop-filter bg-opacity-60 backdrop-blur-md dark:bg-opacity-60">
								<NavbarButton
									url="/"
									sectionName="Home"
									icon={<PiHouseLight />}
									activeIcon={<PiHouseFill />}
									darkMode={darkMode}
								/>

								<NavbarButton
									url="/skills"
									sectionName="Skills"
									icon={<PiUserLight />}
									activeIcon={<PiUserFill />}
									darkMode={darkMode}
								/>

								<NavbarButton
									url="/projects"
									sectionName="Projects"
									icon={<PiStackLight />}
									activeIcon={<PiStackFill />}
									darkMode={darkMode}
								/>

								<NavbarButton
									url="/contact"
									sectionName="Contact"
									icon={<PiEnvelopeLight />}
									activeIcon={<PiEnvelopeFill />}
									darkMode={darkMode}
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

export default Navbar;
