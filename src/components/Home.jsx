import React from "react";
import satya from "../assets/satyajpg.jpg";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const Home = () => {
	return (
		<div className="relative flex flex-col items-center justify-center py-4 mt-16 text-gray-500 border">
			<div className="flex justify-around text-4xl">
				<p>: : : _</p>
				<img
					src={satya}
					className="object-contain w-1/2 shadow-lg rounded-2xl"
				/>
				<div className="self-end">
					<p>x x _</p>
					<p>_ : : </p>
				</div>
			</div>

			<div className="w-3/4 p-2 mt-4 border rounded-xl">
				<h1 className="text-xl font-semibold">
					: : Front-end React Web Developer
				</h1>
				<div className="text-sm">
					<p className="mt-4">
						Hi, I'm <span className="font-semibold">Satya Mahendra,</span>
					</p>
					<p>
						I'm a front-end React JS web developer based in Malang, East Java.
					</p>
				</div>
			</div>

			<div className="flex items-center mt-4">
				<h2 className="px-4 border-r-2 border-red-500">Tech Stack</h2>
				<div className="flex gap-4 ml-4">
					<FaHtml5 size="25" color="orange" />
					<FaCss3Alt size="25" color="blue" />
					<FaJsSquare size="25" color="orange" />
					<FaReact size="25" color="lightblue" />
					<BiLogoTailwindCss size="25" color="purple" />
				</div>
			</div>
		</div>
	);
};

export default Home;
