import React, { useEffect, useState } from "react";
import satya from "../../assets/satyajpg2.jpg";

import { AnimatePresence, motion } from "framer-motion";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { PiDiamondsFourFill } from "react-icons/pi";
import BiodataModal from "./BiodataModal";

const Home = ({ setSectionIndex }) => {
	const [showBiodataModal, setShowBiodataModal] = useState(false);

	useEffect(() => {
		setSectionIndex(0);
	}, []);

	return (
		<section
			id="home"
			className="relative flex flex-col items-center justify-center h-screen mb-40 realtive"
		>
			<PiDiamondsFourFill className="mb-4 sm:text-xl" />
			<span className="sm:text-xl">Hi, I'm..</span>
			<h2 className="mb-4 text-2xl sm:text-4xl">Satya Mahendra</h2>

			<div className="flex flex-col items-center justify-center">
				<img
					src={satya}
					className="w-2/3 -mb-0.5 border-8 border-blue-400 rounded-full sm:w-1/2"
				/>

				<div className="flex items-center justify-between w-24 h-4 text-white bg-blue-400 ">
					<div className="w-1/3 h-full bg-white rounded-r-xl"></div>
					<div className="w-1/3 h-full bg-white rounded-l-xl"></div>
				</div>
				<div className="relative flex flex-col items-center justify-center gap-2 p-4 font-semibold text-white bg-blue-400 rounded-xl">
					<h1 className="sm:text-2xl">Front-end Web Developer</h1>
					<p className="text-sm font-light text-center sm:text-xl">
						Specialized in <span className="font-semibold">React JS</span>
					</p>
					<PiDiamondsFourFill className="absolute w-8 h-8 p-2 text-sm bg-blue-400 rounded-full -bottom-4 sm:text-xl" />
				</div>
			</div>

			<ul className="flex items-center justify-around w-2/3 py-4 mt-8 text-2xl border-t border-gray-300 sm:w-1/3 sm:text-4xl">
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

				<motion.li whileHover={{ scale: 1.1, y: -5 }}>
					<a
						href="https://drive.google.com/file/d/10kAqVNN3iCBp5d3vv5XApX6Ow5NGU-Ap/view"
						target="_blank"
						className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-400 rounded-md sm:text-xl"
					>
						resume
					</a>
				</motion.li>
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
		</section>
	);
};

export default Home;
