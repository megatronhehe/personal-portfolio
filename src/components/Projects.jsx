import React from "react";

import { BsGithub, BsBoxArrowInUpRight } from "react-icons/bs";

import defaultImg from "../assets/default-img.png";

const Projects = () => {
	return (
		<div className="flex justify-center py-24 tracking-wide text-blue-400 ">
			<div className="max-w-xl p-8 xl:max-w-4xl ">
				<div className="px-8 border-l-8 border-blue-500 ">
					<div className="mb-4 ">
						<h1 className="w-1/2 mb-4 font-bold">My Projects</h1>

						<p className="text-sm text-justify">
							these are some of my featured projects that i've built from
							scratch. yes you heard me right, from scratch. all of the
							functionality, ui and everything, coded by ME. if you dont believe
							me we can fight right now just call out a place i will pull up on
							you bro for real.
						</p>
					</div>
				</div>

				<div className="relative gap-2 p-2 mb-4 text-white bg-blue-400 rounded-lg sm:flex">
					<div className="sm:w-1/2">
						<img className="mb-2 rounded-lg sm:mb-0" src={defaultImg} />
						<h2 className="my-2 font-semibold text-center">
							Clothing E-Commerce Website
						</h2>
					</div>

					<div className="flex gap-2 xl:flex-col sm:w-1/2">
						<div className="p-4 bg-white rounded-lg ">
							<p className="text-sm text-justify text-gray-500">
								Online E-Commerce Website that sells clothing products with
								complete functionality (except payment) like cart systems,
								choose products color, size, and quantity based on user
								preferences and more.
							</p>
						</div>
					</div>

					<div className="absolute left-0 flex flex-col gap-2 p-2 text-2xl text-center bg-gray-600 top-1/4 rounded-xl ">
						<div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
							<BsGithub />
						</div>
						<div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
							<BsBoxArrowInUpRight />
						</div>
					</div>
				</div>

				<div className="relative gap-2 p-2 mb-4 border rounded-lg shadow-sm sm:flex">
					<div className="flex gap-2 xl:flex-col sm:w-1/2">
						<div className="p-4 bg-blue-400 rounded-lg ">
							<p className="text-sm text-justify text-white ">
								App to help you track on what movies or shows you have and
								haven't watch.
							</p>
						</div>
					</div>

					<div className="sm:w-1/2">
						<img className="mb-2 rounded-lg sm:mb-0" src={defaultImg} />
						<h2 className="my-2 font-semibold text-center">
							Movie Watchlist Tracker App
						</h2>
					</div>

					<div className="absolute right-0 flex flex-col gap-2 p-2 text-2xl text-center text-white bg-gray-600 top-1/4 rounded-xl">
						<div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
							<BsGithub />
						</div>
						<div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
							<BsBoxArrowInUpRight />
						</div>
					</div>
				</div>

				<div className="relative gap-2 p-2 mb-4 text-white bg-blue-400 rounded-lg sm:flex">
					<div className="sm:w-1/2">
						<img className="mb-2 rounded-lg sm:mb-0" src={defaultImg} />
						<h2 className="my-2 font-semibold text-center">
							Food Ordering Panel App
						</h2>
					</div>

					<div className="flex gap-2 xl:flex-col sm:w-1/2">
						<div className="p-4 bg-white rounded-lg ">
							<p className="text-sm text-justify text-gray-500">
								Restaurant ordering panel app to help restaurant operator to
								deal with orders, such as mark an order as completed, calculate
								the sum of the price, edit items ordered based on the selected
								order and more.
							</p>
						</div>
					</div>

					<div className="absolute left-0 flex flex-col gap-2 p-2 text-2xl text-center bg-gray-600 top-1/4 rounded-xl ">
						<div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
							<BsGithub />
						</div>
						<div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
							<BsBoxArrowInUpRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
