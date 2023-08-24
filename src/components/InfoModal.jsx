import React from "react";

import { PiInfo, PiArrowLeft } from "react-icons/pi";

const InfoModal = ({ setToggleInfoModal }) => {
	return (
		<div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-4 p-4 text-white bg-gray-700">
			<PiInfo className="text-4xl" />
			<p className="text-center">
				this portfolio is originally made by me. this portfolio is made using
				React JS and Tailwind CSS and powered by Netlify.
			</p>
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
