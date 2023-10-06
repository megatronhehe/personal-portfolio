import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { PiArrowSquareOutLight, PiDiamondFill } from "react-icons/pi";

const ResumeButton = () => {
	const [toggleChooseVer, setToggleChooseVer] = useState(false);

	return (
		<li
			onMouseEnter={() => setToggleChooseVer(true)}
			onMouseLeave={() => setToggleChooseVer(false)}
		>
			<div className="relative flex items-center justify-center gap-2 px-3 py-1 text-sm text-white bg-blue-400 rounded-md sm:text-xl">
				résumé <PiArrowSquareOutLight />
				<AnimatePresence>
					{toggleChooseVer && (
						<motion.div
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: -5 }}
							exit={{ opacity: 0, y: 0 }}
							className="absolute flex justify-center gap-2 p-2 text-base bg-gray-600 rounded-full -top-14"
						>
							<a
								href="https://drive.google.com/file/d/1HV4Q1VpUxc2RdpUV2SzfXNcB82U3V4oj/view?usp=drive_link"
								target="_blank"
								className="flex items-center justify-center w-10 h-10 p-2 font-semibold duration-200 bg-blue-300 rounded-l-full hover:bg-white hover:text-blue-300"
							>
								EN
							</a>
							<a
								href="https://drive.google.com/file/d/1Y-DYyAhOPSlvdL3SZke4MF2fCM-E9h2X/view?usp=drive_link"
								target="_blank"
								className="flex items-center justify-center w-10 h-10 p-2 font-semibold duration-200 bg-red-300 rounded-r-full hover:text-red-300 hover:bg-white"
							>
								ID
							</a>
							<PiDiamondFill className="absolute text-gray-600 -bottom-2" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</li>
	);
};

export default ResumeButton;
