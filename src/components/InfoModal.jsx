import React from "react";

import { motion } from "framer-motion";

import { PiInfo, PiArrowLeft } from "react-icons/pi";
import { SiReact, SiTailwindcss, SiNetlify } from "react-icons/si";

const InfoModal = ({ setToggleInfoModal }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-8 p-4 text-xl text-white bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg"
		>
			<PiInfo className="text-4xl" />
			<div className="flex flex-col items-center gap-4">
				<h2>This portfolio is made using:</h2>
				<ul className="flex gap-8">
					<li className="flex flex-col items-center text-blue-300 text-purpe">
						<SiReact className="text-4xl" />
						React JS
					</li>
					<li className="flex flex-col items-center text-cyan-500">
						<SiTailwindcss className="text-4xl" />
						Tailwind CSS
					</li>
				</ul>
			</div>

			<div className="flex flex-col items-center gap-4">
				<h2>This portfolio powered by:</h2>
				<ul className="flex gap-8">
					<li className="flex flex-col items-center text-cyan-300">
						<SiNetlify className="text-4xl" />
						Netlify
					</li>
				</ul>
			</div>

			<h1 className="text-center text-gray-400">
				satya.dev 2023 - frontend web developer
			</h1>
			<button
				onClick={() => {
					setToggleInfoModal(false);
				}}
				className="absolute text-2xl top-2 left-2"
			>
				<PiArrowLeft />
			</button>
		</motion.div>
	);
};

export default InfoModal;
