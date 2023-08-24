import React, { useState } from "react";

import Skills from "./Skills";
import Projects from "./Projects";

import { PiDiamondsFourFill } from "react-icons/pi";

const About = () => {
	const [selected, setSelected] = useState("skills");

	return (
		<section id="about" className="flex flex-col items-center h-screen pt-6">
			<div className="w-full max-w-3xl">
				<nav className="relative flex justify-center w-full">
					<PiDiamondsFourFill className="absolute -top-3.5 p-1 bg-white border rounded-full w-7 h-7" />

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

				{selected === "skills" ? <Skills /> : <Projects />}
			</div>
		</section>
	);
};

export default About;
