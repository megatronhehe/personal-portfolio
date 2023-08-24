import React from "react";

import { PiInfo, PiArrowLeft } from "react-icons/pi";
import { SiReact, SiTailwindcss, SiNetlify } from "react-icons/si";

const InfoModal = ({ setToggleInfoModal }) => {
	return (
		<div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-8 p-4 text-white bg-gray-700">
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

			<h1 className="text-gray-400">satya.dev 2023 - frontend web developer</h1>
			<button
				onClick={() => {
					setToggleInfoModal(false);
				}}
				className="absolute text-2xl top-2 left-2"
			>
				<PiArrowLeft />
			</button>
		</div>
	);
};

export default InfoModal;
