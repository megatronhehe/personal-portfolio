import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { NavLink } from "react-router-dom";

const NavbarButton = ({ url, sectionName, icon, activeIcon }) => {
	const [showSectionName, setShowSectionName] = useState(false);

	useEffect(() => {
		if (showSectionName) {
			setTimeout(() => {
				setShowSectionName(false);
			}, 2000);
		}
	}, [showSectionName]);

	return (
		<NavLink
			to={url}
			onMouseEnter={() => setShowSectionName(true)}
			onMouseLeave={() => setShowSectionName(false)}
			className="relative flex items-center justify-center w-10 h-10 text-2xl duration-200 hover:scale-125 sm:text-4xl"
		>
			{({ isActive }) => (
				<>
					{isActive ? activeIcon : icon}

					<AnimatePresence>
						{showSectionName && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								className="absolute px-3 py-1 text-sm text-white bg-gray-700 border sm:text-base -top-6 sm:-top-12 rounded-xl dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
							>
								{sectionName}
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
		</NavLink>
	);
};

export default NavbarButton;
