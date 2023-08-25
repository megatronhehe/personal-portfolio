import React from "react";

import { motion } from "framer-motion";

import { BsPersonCircle } from "react-icons/bs";
import {
	PiMusicNotesLight,
	PiGameControllerLight,
	PiCodeLight,
	PiIceCreamLight,
	PiXLight,
} from "react-icons/pi";

const BiodataModal = ({ setShowBiodataModal }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			onClick={() => setShowBiodataModal(false)}
			className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full text-black "
		>
			<div className="relative flex flex-col items-center justify-center w-full max-w-xs gap-4 p-4 bg-white border shadow-lg sm:max-w-lg rounded-xl max-h-2xl bg-opacity-90 backdrop-filter backdrop-blur-sm">
				<h1 className="flex flex-col items-center w-full gap-2 pb-4 text-2xl text-center border-b">
					<BsPersonCircle className="p-2 text-blue-300 bg-white rounded-full w-14 h-14" />
					Biodata
				</h1>
				<ul className="flex flex-col gap-4 sm:text-xl">
					<li className="flex flex-col items-center">
						<h2 className="text-sm sm:text-base">Full name</h2>
						<p className="font-normal">Ida Bagus Satya Mahendra</p>
					</li>

					<li className="flex flex-col items-center">
						<h2 className="text-sm sm:text-base">Birthday</h2>
						<p className="font-normal">June 17th, 2000</p>
					</li>

					<li className="flex flex-col items-center">
						<h2 className="text-sm sm:text-base">Location</h2>
						<p className="font-normal">Malang, East Java Indonesia</p>
					</li>

					<li className="flex flex-col items-center">
						<h2 className="text-sm sm:text-base">Interest</h2>
						<ul className="flex gap-2 text-2xl text-gray-500 sm:text-4xl">
							<li className="p-2 bg-white border rounded-full">
								<PiMusicNotesLight />
							</li>
							<li className="p-2 bg-white border rounded-full">
								<PiGameControllerLight />
							</li>
							<li className="p-2 bg-white border rounded-full">
								<PiCodeLight />
							</li>
							<li className="p-2 bg-white border rounded-full">
								<PiIceCreamLight />
							</li>
						</ul>
					</li>
				</ul>

				<button className="absolute flex items-center justify-center w-8 h-8 text-white bg-red-300 rounded-full top-2 right-2">
					<PiXLight />
				</button>
			</div>
		</motion.div>
	);
};

export default BiodataModal;
