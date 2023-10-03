import React from "react";

import { projectData } from "../../data/projectsData";

import { PiStackLight } from "react-icons/pi";
import { BsFillExclamationCircleFill } from "react-icons/bs";

import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";

const About = () => {
	const projectCardsElement = projectData.map((project) => (
		<ProjectCard key={project.id} project={project} />
	));

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center h-screen "
		>
			<div className="w-full h-full max-w-3xl">
				<section className="flex flex-col items-center justify-center border-b dark:border-gray-600 h-1/3">
					<h2 className="flex flex-col items-center justify-end gap-2 text-lg text-center sm:text-2xl h-1/2">
						<PiStackLight className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14" />
						<span>Projects</span>
					</h2>
					<div className="flex flex-col items-center justify-center max-w-xl gap-4 px-6 text-sm text-center h-1/2">
						<p>
							Here are some of my featured projects. All the of the projects are
							originally made by me, my own code, and my own design.
						</p>
					</div>
				</section>

				<section className="flex flex-col h-2/3">
					<ul className="grid grid-cols-2 gap-2 p-2 overflow-auto sm:grid-cols-3">
						{projectCardsElement}
					</ul>
				</section>
			</div>
		</motion.section>
	);
};

export default About;
