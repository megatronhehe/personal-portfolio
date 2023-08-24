import React from "react";

import { motion } from "framer-motion";

import { TechStackButton } from "./TechStackButton";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { HiLanguage } from "react-icons/hi2";

import {
	PiCubeLight,
	PiCodeLight,
	PiBookOpenLight,
	PiThumbsUpLight,
	PiSelectionThin,
	PiHeartLight,
	PiUserLight,
	PiUsersThreeLight,
	PiHeadsetLight,
	PiHandshakeThin,
} from "react-icons/pi";

const Skills = () => {
	return (
		<>
			<section className="flex flex-col py-4 border-b sm:py-6">
				{/* <div className="bg-red-400 bg-orange-400 bg-yellow-400 bg-blue-300 bg-blue-400 bg-purple-400"></div> */}
				<div>
					<h2 className="flex flex-col items-center justify-center gap-2 pb-4 text-lg text-center sm:text-2xl sm:mb-6">
						<PiCubeLight className="w-10 h-10 p-2 border rounded-full sm:w-14 sm:h-14" />
						Tech stack
					</h2>
					<ul className="flex justify-around text-3xl text-white">
						<TechStackButton
							title="HTML"
							icon={<FaHtml5 />}
							color="orange-400"
						/>

						<TechStackButton
							title="CSS"
							icon={<FaCss3Alt />}
							color="blue-400"
						/>

						<TechStackButton
							title="JavaScript"
							icon={<FaJsSquare />}
							color="yellow-400"
						/>

						<TechStackButton
							title="ReactJS"
							icon={<FaReact />}
							color="blue-300"
						/>

						<TechStackButton
							title="TailwindCSS"
							icon={<BiLogoTailwindCss />}
							color="purple-400"
						/>

						<TechStackButton
							title="ReactRouter"
							icon={<SiReactrouter />}
							color="red-400"
						/>
					</ul>
				</div>
			</section>

			<section className="flex flex-col py-4 border-b sm:py-6">
				<div className="text-sm sm:text-xl ">
					<h2 className="flex flex-col items-center justify-center gap-2 mb-2 text-base text-center sm:text-2xl sm:mb-6">
						<PiCodeLight className="w-10 h-10 p-2 border rounded-full sm:w-14 sm:h-14" />
						Code
					</h2>
					<ul className="flex flex-col gap-1 text-black">
						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiCodeLight className="w-6 h-6 p-1 border rounded-full" />
							create clean code
						</li>
						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiBookOpenLight className="w-6 h-6 p-1 border rounded-full" />
							create easy to read code
						</li>

						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiThumbsUpLight className="w-6 h-6 p-1 border rounded-full" />
							following coding best practices
						</li>
						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiSelectionThin className="w-6 h-6 p-1 border rounded-full" />
							create responsive design
						</li>
					</ul>
				</div>
			</section>

			<section className="flex border-b ">
				<div className="w-1/2 py-4 text-sm border-r sm:py-6 sm:text-xl">
					<h2 className="flex flex-col items-center justify-center gap-2 mb-2 text-center sm:text-2xl sm:mb-6">
						<PiHeadsetLight className="w-10 h-10 p-2 border rounded-full sm:w-14 sm:h-14" />
						Communication
					</h2>
					<ul className="flex flex-col gap-2 text-black">
						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiHeartLight className="w-6 h-6 p-1 border rounded-full" />
							polite & respectful
						</li>
						<li className="flex items-center justify-center gap-2 rounded-full">
							<HiLanguage className="w-6 h-6 p-1 border rounded-full" />
							fluent english & native
						</li>
					</ul>
				</div>

				<div className="w-1/2 py-4 text-sm sm:py-6 sm:text-xl">
					<h2 className="flex flex-col items-center justify-center gap-2 mb-2 text-center sm:text-2xl sm:mb-6">
						<PiHandshakeThin className="w-10 h-10 p-2 border rounded-full sm:w-14 sm:h-14" />
						Environment
					</h2>
					<ul className="flex flex-col gap-2 text-black">
						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiUsersThreeLight className="w-6 h-6 p-1 border rounded-full" />
							efficient team player
						</li>
						<li className="flex items-center justify-center gap-2 rounded-full">
							<PiUserLight className="w-6 h-6 p-1 border rounded-full" />
							effective solo worker
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Skills;
