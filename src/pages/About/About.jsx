import React, { useState, useEffect } from "react";

import Skills from "./Skills";
import Projects from "./Projects";

import { motion } from "framer-motion";

import { PiDiamondsFourFill } from "react-icons/pi";
import { AnimatePresence } from "framer-motion";

const About = ({ setSectionIndex }) => {
	const [selected, setSelected] = useState("skills");

	useEffect(() => {
		setSectionIndex(1);
	}, []);

	return (
		<section
			id="about"
			className="flex flex-col items-center pt-6 mb-72 sm:pt-16"
		>
			<div className="w-full max-w-3xl">
				<nav className="relative flex justify-center w-full">
					<motion.div
						key={selected}
						animate={{ rotate: 360 }}
						transition={{ duration: 1.5 }}
						className="absolute flex items-center justify-center -top-3.5 p-1 bg-white border rounded-full w-7 h-7"
					>
						<PiDiamondsFourFill />
					</motion.div>

					<ul className="flex justify-around w-full px-2 text-gray-400 border-y sm:text-xl">
						<li
							onClick={() => setSelected("skills")}
							className={`px-4 py-3 border-b-4 
							${selected === "skills" ? "border-blue-300 text-black" : "border-white"}
							`}
						>
							Skills
						</li>
						<li
							onClick={() => setSelected("projects")}
							className={`px-4 py-3 border-b-4 
							${selected === "projects" ? "border-blue-300 text-black" : "border-white"}
							`}
						>
							Projects
						</li>
					</ul>
				</nav>

				<AnimatePresence mode="wait">
					<motion.div
						key={selected}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
					>
						{selected === "skills" ? <Skills /> : <Projects />}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
};

export default About;
