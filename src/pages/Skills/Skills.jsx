import React from "react";

import { TechStackButton } from "./TechStackButton";

import { motion } from "framer-motion";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { HiLanguage } from "react-icons/hi2";

import {
	PiCubeLight,
	PiCodeLight,
	PiThumbsUpLight,
	PiSelectionThin,
	PiHeartFill,
	PiUserLight,
	PiUsersThreeLight,
	PiHeadsetLight,
	PiHandshakeThin,
} from "react-icons/pi";

const Skills = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center h-screen "
		>
			<div className="w-full h-full max-w-3xl">
				{/* <div className="bg-red-400 bg-orange-400 bg-yellow-400 bg-blue-300 bg-blue-400 bg-purple-400"></div> */}

				<section className="flex flex-col justify-center border-b dark:border-gray-600 h-1/3">
					<h2 className="flex flex-col items-center justify-end gap-2 text-lg text-center sm:text-2xl h-1/2">
						<PiCubeLight className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14" />
						Tech stack
					</h2>
					<ul className="flex items-center justify-center gap-2 px-6 text-3xl text-white sm:px-0 h-1/2">
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
				</section>

				<section className="flex flex-col py-4 border-b dark:border-gray-600 sm:py-6 h-1/3">
					<div className="text-sm sm:text-lg ">
						<h2 className="flex flex-col items-center justify-center gap-2 mb-2 text-base text-center sm:text-2xl sm:mb-6">
							<PiCodeLight className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14 " />
							Code
						</h2>
						<ul className="flex flex-col gap-1 ">
							<li className="flex items-center justify-center gap-2 rounded-full ">
								<PiCodeLight className="p-1 text-white bg-blue-600 rounded-full w-7 h-7" />
								create clean code
							</li>

							<li className="flex items-center justify-center gap-2 rounded-full">
								<PiThumbsUpLight className="p-1 text-white bg-red-600 rounded-full w-7 h-7" />
								following coding best practices
							</li>

							<li className="flex items-center justify-center gap-2 rounded-full">
								<PiSelectionThin className="p-1 text-white bg-purple-600 rounded-full w-7 h-7" />
								create responsive design
							</li>
						</ul>
					</div>
				</section>

				<section className="flex h-1/3">
					<div className="w-1/2 py-4 text-sm border-r sm:py-6 sm:text-lg dark:border-gray-600">
						<h2 className="flex flex-col items-center justify-center gap-2 mb-2 text-center sm:text-2xl sm:mb-6">
							<PiHeadsetLight className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14" />
							Communication
						</h2>
						<ul className="flex flex-col gap-2 ">
							<li className="flex items-center justify-center gap-2 rounded-full">
								<PiHeartFill className="p-1 text-white bg-red-400 rounded-full w-7 h-7" />
								polite & respectful
							</li>
							<li className="flex items-center justify-center gap-2 rounded-full">
								<HiLanguage className="p-1 text-white bg-blue-600 rounded-full w-7 h-7" />
								fluent english & native
							</li>
						</ul>
					</div>

					<div className="w-1/2 py-4 text-sm sm:py-6 sm:text-lg">
						<h2 className="flex flex-col items-center justify-center gap-2 mb-2 text-center sm:text-2xl sm:mb-6">
							<PiHandshakeThin className="w-10 h-10 p-2 border rounded-full dark:border-gray-600 sm:w-14 sm:h-14" />
							Environment
						</h2>
						<ul className="flex flex-col gap-2 ">
							<li className="flex items-center justify-center gap-2 rounded-full">
								<PiUsersThreeLight className="p-1 text-white bg-green-600 rounded-full w-7 h-7" />
								efficient team player
							</li>
							<li className="flex items-center justify-center gap-2 rounded-full">
								<PiUserLight className="p-1 text-white bg-red-600 rounded-full w-7 h-7" />
								effective solo worker
							</li>
						</ul>
					</div>
				</section>
			</div>
		</motion.section>
	);
};

export default Skills;
