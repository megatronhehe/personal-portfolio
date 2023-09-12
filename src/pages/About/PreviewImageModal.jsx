import React, { useState } from "react";

import { motion } from "framer-motion";

import { PiXLight, PiCaretLeft, PiCaretRight } from "react-icons/pi";

const PreviewImageModal = ({ image, setToggleModal }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const nextImage = (e) => {
		e.stopPropagation();
		setImageIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
	};

	const prevImage = (e) => {
		e.stopPropagation();
		setImageIndex((prev) => (prev < 1 ? image.length - 1 : prev - 1));
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setToggleModal(false)}
			className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-80"
		>
			<button
				onClick={() => setToggleModal(false)}
				className="absolute flex items-center justify-center w-12 h-12 text-2xl text-white bg-red-400 rounded-full top-10"
			>
				<PiXLight />
			</button>
			<img
				className="object-contain w-full max-w-7xl h-2/3"
				src={image[imageIndex]}
			/>
			<button
				onClick={prevImage}
				className="absolute flex items-center justify-center w-10 h-10 text-white bg-gray-400 rounded-full bg-opacity-90 left-1 top-1/2"
			>
				<PiCaretLeft />
			</button>
			<button
				onClick={nextImage}
				className="absolute flex items-center justify-center w-10 h-10 text-white bg-gray-400 rounded-full bg-opacity-90 right-1 top-1/2"
			>
				<PiCaretRight />
			</button>
			<div className="absolute px-4 py-2 text-sm text-white bg-gray-600 bg-opacity-75 rounded-full bottom-2">
				{imageIndex + 1}/{image.length}
			</div>
		</motion.div>
	);
};

export default PreviewImageModal;
