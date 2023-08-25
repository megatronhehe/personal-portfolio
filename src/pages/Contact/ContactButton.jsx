import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { BsFillCaretUpFill } from "react-icons/bs";

const ContactButton = ({ icon, name, link }) => {
	const [showMedia, setShowMedia] = useState(false);

	return (
		<motion.li
			whileHover={{ scale: 1.1, y: -5 }}
			onMouseEnter={() => setShowMedia(true)}
			onMouseLeave={() => setShowMedia(false)}
		>
			<a href={link} target="_blank" className="relative flex justify-center">
				{icon}
				<AnimatePresence>
					{showMedia && (
						<motion.h3
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -5 }}
							className="absolute flex justify-center p-2 text-sm text-center text-white bg-gray-600 rounded-md top-12"
						>
							{name}
							<BsFillCaretUpFill className="absolute text-2xl text-gray-600 -top-4" />
						</motion.h3>
					)}
				</AnimatePresence>
			</a>
		</motion.li>
	);
};

export default ContactButton;
