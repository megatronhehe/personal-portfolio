import React, { useState } from "react";

import { projectData } from "../../data/projectsData";

import ProjectCard from "./ProjectCard";

import { PiStackLight } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
	const projectsElement = projectData.map((project) => (
		<ProjectCard key={project.id} project={project} />
	));

	return (
		<section className="p-4 sm:py-6">
			<div className="flex flex-col items-center ">
				<h2 className="flex flex-col items-center justify-center gap-2 pb-4 text-lg text-center sm:text-2xl">
					<PiStackLight className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14" />
					Projects
				</h2>
				<p className="text-sm sm:text-base">
					The projects are purely made by me, my own design, my own code, my own
					everything. Here are a few of my featured projects:
				</p>
				<div className="flex justify-center w-full mt-4 ">
					<a
						href="https://github.com/megatronhehe"
						target="_blank"
						className="flex items-center gap-2 p-2 border rounded-full hover:bg-gray-700 hover:text-white hover:border-white"
					>
						<p className="text-sm">check my repo!</p>
						<BsGithub className="text-2xl" />
					</a>
				</div>
			</div>

			<div className="">
				<ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 ">
					{projectsElement}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
