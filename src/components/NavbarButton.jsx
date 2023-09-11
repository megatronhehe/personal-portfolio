import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const NavbarButton = ({
	sectionName,
	icon,
	scrollToSection,
	sectionInView,
	isPopup = false,
	setToggleInfoModal,
}) => {
	const [showSectionName, setShowSectionName] = useState(false);

	return (
		<motion.li
			onMouseEnter={() => setShowSectionName(true)}
			onMouseLeave={() => setShowSectionName(false)}
			whileHover={{ scale: 1.2, y: -4 }}
			transition={{ type: "tween", duration: 0.1 }}
			onClick={() => {
				isPopup
					? setToggleInfoModal((prev) => !prev)
					: scrollToSection(sectionName);
			}}
			className="relative flex items-center justify-center w-10 h-10 text-2xl sm:text-4xl"
		>
			{icon}
			<AnimatePresence>
				{sectionInView === sectionName && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute bottom-0 w-6 h-1 bg-gray-700 rounded-full sm:-bottom-1 dark:bg-gray-200"
					></motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{showSectionName && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="absolute px-2 py-1 text-sm text-white bg-gray-700 -top-6 sm:-top-8 rounded-xl dark:bg-gray-200 dark:text-gray-800"
					>
						{sectionName}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
};

export default NavbarButton;
