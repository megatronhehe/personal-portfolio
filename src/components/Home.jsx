import React from "react";
import satya from "../assets/satyajpg2.jpg";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const Home = () => {
	return (
		<div className="flex justify-center tracking-wide">
			<div className="max-w-xl p-8 text-gray-500 ">
				<div className="px-8 border-l-4 border-blue-400">
					<p>Hi, I'm</p>
					<h1 className="pb-2 mb-4 text-2xl text-blue-500 border-b border-blue-500">
						Satya Mahendra
					</h1>
					<div className="flex justify-center gap-4 text-2xl">
						<div>
							<p>x _</p>
							<p>: : _</p>
						</div>
						<img src={satya} className="w-2/3 rounded-2xl" />
						<div className="self-end">
							<p>: : _</p>
							<p>x _</p>
						</div>
					</div>
					<h2 className="my-4 text-lg font-semibold">
						Frontend <span className="font-bold text-blue-300">React</span> Web
						Dev.
					</h2>
					<p className="text-center">
						I'm a passionate frontend React web developer based in Malang, East
						Java, Indonesia.
					</p>
					<p className="my-4 text-end">. . . nice to meet you!</p>
				</div>
				<div className="flex items-center justify-between p-2 pl-4 text-white bg-blue-400 shadow-sm rounded-xl">
					<p>Tech Stack</p>
					<div className="flex justify-center gap-4 p-2 bg-white rounded-lg sm:gap-8">
						<div>
							<FaHtml5 size="30" color="orange" />
						</div>
						<div>
							<FaCss3Alt size="30" color="blue" />
						</div>
						<div>
							<FaJsSquare size="30" color="orange" />
						</div>
						<div>
							<FaReact size="30" color="lightblue" />
						</div>
						<div>
							<BiLogoTailwindCss size="30" color="purple" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
