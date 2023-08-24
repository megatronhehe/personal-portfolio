import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export const TechStackButton = ({ title, icon, color }) => {
	const [showTitle, setShowTitle] = useState(false);

	return (
		<motion.li
			whileHover={{ scale: 1.1, y: -10 }}
			onMouseEnter={() => setShowTitle(true)}
			onMouseLeave={() => setShowTitle(false)}
			className={`relative flex items-center justify-center w-12 h-12 rounded-xl sm:w-16 sm:h-16 bg-${color}`}
		>
			{icon}
			<AnimatePresence>
				{showTitle && (
					<motion.h3
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className={`font-semibold absolute flex items-center text-center justify-center flex-col rounded-lg text-sm -bottom-8  px-3 py-1 bg-${color}`}
					>
						{title}
					</motion.h3>
				)}
			</AnimatePresence>
		</motion.li>
	);
};
