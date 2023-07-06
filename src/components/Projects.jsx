import React from "react";

import { BsGithub, BsBoxArrowInUpRight } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

import defaultImg from "../assets/default-img.png";

const Projects = () => {
	return (
		<div className="flex justify-center py-24 tracking-wide text-blue-400 ">
			<div className="max-w-xl p-8 xl:max-w-4xl ">
				<div className="px-8 border-l-8 border-blue-500 ">
					<div className="mb-8 ">
						<h1 className="w-1/2 mb-4 font-bold">My Projects</h1>

						<p className="mb-4 text-sm text-justify">
							these are some of my featured projects that i've built from
							scratch. yes you heard me right, from scratch. all of the
							functionality, ui and everything, coded by ME. if you dont believe
							me we can fight right now just call out a place i will pull up on
							you bro for real. jk.
						</p>
						<p className="flex items-center gap-4 text-sm text-justify">
							Check all of my projects on my
							<button className="flex items-center gap-2 p-2 text-xl text-white bg-blue-400 rounded-xl">
								<BsGithub />
								<p className="text-sm">GitHub</p>
							</button>
						</p>
					</div>
				</div>

				{/* FIRST CARD */}
				<div className="relative gap-4 p-4 mb-8 overflow-hidden text-gray-500 border border-blue-400 sm:flex rounded-tr-2xl rounded-bl-2xl">
					<div className="sm:w-1/2">
						<img src={defaultImg} className="rounded-xl" />
					</div>
					<div className="sm:w-1/2">
						<div>
							<h3 className="my-4 font-semibold text-center">
								Clothing E-Commerce Website
							</h3>
							<p className="mb-4 text-sm">
								An online clothing online shop complete with most of the actual
								online shop functionality like cart systems, ability to choose
								and pick color, and more.
							</p>
							<ul className="flex justify-around text-sm font-semibold">
								<li className="flex items-center gap-2">
									react
									<FaReact />
								</li>

								<li className="flex items-center gap-2">
									tailwind
									<BiLogoTailwindCss />
								</li>
							</ul>
						</div>
					</div>

					<div className="absolute top-0 left-0 gap-2 p-2 text-2xl text-center text-white bg-blue-400 shadow-md rounded-br-xl">
						<p className="mb-2 text-xs">try it out!</p>
						<div className="flex gap-2 text-gray-400">
							<div className="flex flex-col items-center justify-center p-2 bg-white rounded-md">
								<BsGithub />
							</div>
							<div className="flex flex-col items-center justify-center p-2 bg-white rounded-md">
								<BsBoxArrowInUpRight />
							</div>
						</div>
					</div>
				</div>

				{/* SECOND CARD */}
				<div className="relative gap-4 p-4 mb-8 overflow-hidden text-white bg-blue-400 border border-blue-400 sm:flex rounded-tr-2xl rounded-bl-2xl sm:flex-row-reverse">
					<div className="sm:w-1/2">
						<img src={defaultImg} className="rounded-xl" />
					</div>
					<div className="sm:w-1/2">
						<div>
							<h3 className="my-4 font-semibold text-center">
								Restaurant Ordering Panel App
							</h3>
							<p className="mb-4 text-sm">
								An app to help restaurant operator to deal with customer orders,
								complete functionality to CRUD a customer order, and count price
								total of each order .
							</p>
							<ul className="flex justify-around text-sm font-semibold">
								<li className="flex items-center gap-2">
									react
									<FaReact />
								</li>

								<li className="flex items-center gap-2">
									tailwind
									<BiLogoTailwindCss />
								</li>
							</ul>
						</div>
					</div>

					<div className="absolute top-0 right-0 gap-2 p-2 text-2xl text-center text-blue-400 bg-white shadow-md rounded-bl-xl">
						<p className="mb-2 text-xs">try it out!</p>
						<div className="flex gap-2 text-white">
							<div className="flex flex-col items-center justify-center p-2 bg-blue-400 rounded-md">
								<BsGithub />
							</div>
							<div className="flex flex-col items-center justify-center p-2 bg-blue-400 rounded-md">
								<BsBoxArrowInUpRight />
							</div>
						</div>
					</div>
				</div>

				{/* THIRD CARD */}
				<div className="relative gap-4 p-4 mb-8 overflow-hidden text-gray-500 border border-blue-400 sm:flex rounded-tr-2xl rounded-bl-2xl">
					<div className="sm:w-1/2">
						<img src={defaultImg} className="rounded-xl" />
					</div>
					<div className="sm:w-1/2">
						<div>
							<h3 className="my-4 font-semibold text-center">
								MeWatchThings App
							</h3>
							<p className="mb-4 text-sm">
								An app to keep track of what movies or shows you have or have
								not watched yet. Hooked up with IMDB API, to give user the
								ability to search every movies and shows that exist in the
								world.
							</p>
							<ul className="flex justify-around text-sm font-semibold">
								<li className="flex items-center gap-2">
									react
									<FaReact />
								</li>

								<li className="flex items-center gap-2">
									tailwind
									<BiLogoTailwindCss />
								</li>
							</ul>
						</div>
					</div>

					<div className="absolute top-0 left-0 gap-2 p-2 text-2xl text-center text-white bg-blue-400 shadow-md rounded-br-xl">
						<p className="mb-2 text-xs">try it out!</p>
						<div className="flex gap-2 text-gray-400">
							<div className="flex flex-col items-center justify-center p-2 bg-white rounded-md">
								<BsGithub />
							</div>
							<div className="flex flex-col items-center justify-center p-2 bg-white rounded-md">
								<BsBoxArrowInUpRight />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
