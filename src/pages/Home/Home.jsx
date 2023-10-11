import React, { useState } from "react";
import satya3 from "../../assets/satyajpg3.jpg";

import { AnimatePresence, motion } from "framer-motion";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { PiDiamondsFourFill, PiArrowSquareOutLight } from "react-icons/pi";
import BiodataModal from "./BiodataModal";
import ResumeButton from "./ResumeButton";

const Home = () => {
	const [showBiodataModal, setShowBiodataModal] = useState(false);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="relative flex flex-col items-center justify-center h-screen realtive"
		>
			<PiDiamondsFourFill className="mb-4 sm:text-xl" />
			<span className="sm:text-xl">Hi, I'm..</span>
			<h2 className="mb-4 text-2xl sm:text-4xl">Satya Mahendra</h2>

			<div className="flex flex-col items-center justify-center ">
				<img
					src={satya3}
					className="w-72 h-72  -mb-0.5 border-8 border-blue-400 rounded-full  object-cover"
					loading="lazy"
					alt="Profile picture of satya"
				/>

				<div className="flex items-center justify-between w-24 h-4 text-white bg-blue-400 ">
					<div className="w-1/3 h-full transition-colors duration-1000 bg-white dark:bg-gray-800 rounded-r-xl"></div>
					<div className="w-1/3 h-full transition-colors duration-1000 bg-white rounded-l-xl dark:bg-gray-800"></div>
				</div>
				<div className="relative flex flex-col items-center justify-center gap-2 p-4 font-semibold text-white bg-blue-400 rounded-xl">
					<h1 className="sm:text-2xl">Front-end Web Developer</h1>
					<p className="text-sm font-light text-center sm:text-xl">
						Specialized in <span className="font-semibold">React JS</span>
					</p>
					<PiDiamondsFourFill className="absolute w-8 h-8 p-2 text-sm bg-blue-400 rounded-full -bottom-4 sm:text-xl" />
				</div>
			</div>

			<ul className="flex items-center justify-around w-2/3 py-4 mt-8 text-2xl duration-1000 border-t border-gray-300 dark:border-gray-600 sm:w-2/3 lg:w-1/3 sm:text-4xl">
				<motion.li whileHover={{ scale: 1.1, y: -5 }}>
					<a
						href="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
						target="_blank"
					>
						<BsLinkedin />
					</a>
				</motion.li>

				<motion.li whileHover={{ scale: 1.1, y: -5 }}>
					<a href="https://github.com/megatronhehe" target="_blank">
						<BsGithub />
					</a>
				</motion.li>

				<ResumeButton />

				<motion.li whileHover={{ scale: 1.1, y: -5 }}>
					<button
						onClick={() => setShowBiodataModal(true)}
						className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-gray-600 rounded-full sm:text-xl"
					>
						biodata
					</button>
				</motion.li>
			</ul>

			<AnimatePresence>
				{showBiodataModal && (
					<BiodataModal setShowBiodataModal={setShowBiodataModal} />
				)}
			</AnimatePresence>
		</motion.section>
	);
};

export default Home;
