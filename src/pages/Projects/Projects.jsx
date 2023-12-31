import React from "react";

import { projectData } from "../../data/projectsData";

import { PiStackLight, PiArrowSquareOutLight } from "react-icons/pi";

import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";
import { GithubCard } from "./GithubCard";

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
					<h2 className="relative flex flex-col items-center justify-end gap-2 text-lg text-center sm:text-2xl h-1/2">
						<PiStackLight className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14" />
						<span>Projects</span>
					</h2>
					<div className="flex flex-col items-center justify-center max-w-xl gap-4 px-6 text-sm text-center h-1/2">
						<p>
							Here are some of my featured projects originally made by me with
							my own code and my own design.
						</p>

						<a
							href="https://github.com/megatronhehe?tab=repositories"
							target="_blank"
							className="flex items-center gap-2 font-normal duration-200 hover:font-bold hover:text-blue-400"
						>
							my github repo <PiArrowSquareOutLight className="text-xl" />
						</a>
					</div>
				</section>

				<section className="flex flex-col h-2/3">
					<ul className="flex gap-4 p-4 overflow-auto snap-x snap-mandatory sm:grid sm:grid-cols-3">
						{projectCardsElement}
						<GithubCard />
					</ul>
				</section>
			</div>
		</motion.section>
	);
};

{
	/* <ul className="grid grid-cols-2 gap-2 p-2 overflow-auto sm:grid-cols-2 md:grid-cols-3">
						{projectCardsElement}
						<GithubCard />
					</ul> */
}

export default About;
