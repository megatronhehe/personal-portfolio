import React from "react";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiReactrouter } from "react-icons/si";

import {} from "react-icons/bs";

const About = () => {
	return (
		<div className="flex justify-center py-24 tracking-wide text-white bg-blue-400">
			<div className="max-w-xl p-8 text-white xl:max-w-4xl ">
				<div className="px-8 border-l-8 border-white ">
					<div className="mb-4 ">
						<h1 className="w-1/2 mb-4 font-bold">About me</h1>

						<p className="text-sm text-justify">
							As a junior frontend React web developer, I have expertise in
							HTML, CSS, and JavaScript. I create seamless and interactive user
							interfaces, paying close attention to detail. I excel at
							problem-solving and delivering pixel-perfect implementations. I
							stay up-to-date with industry trends and consistently deliver
							clean, exceptional code. As an excellent team player, I have
							experience collaborating in competitive environments. I'm also
							proficient at independently resolving issues.
						</p>
					</div>

					<div>
						<h2 className="mb-4 font-semibold">Tech stacks</h2>
						<div className="flex flex-wrap justify-between p-4 text-2xl bg-white sm:text-4xl rounded-xl">
							<div className="flex flex-col items-center text-orange-500">
								<FaHtml5 />
								<p className="text-xs font-bold ">HTML</p>
							</div>
							<div className="flex flex-col items-center text-blue-700">
								<FaCss3Alt />
								<p className="text-xs font-bold">CSS</p>
							</div>
							<div className="flex flex-col items-center text-yellow-400">
								<FaJsSquare />
								<p className="text-xs font-bold">JavaScript</p>
							</div>
							<div className="flex flex-col items-center text-blue-300">
								<FaReact />
								<p className="text-xs font-bold">ReactJS</p>
							</div>
							<div className="flex flex-col items-center text-purple-500">
								<BiLogoTailwindCss />
								<p className="text-xs font-bold">TailwindCSS</p>
							</div>
							<div className="flex flex-col items-center text-red-500">
								<SiReactrouter />
								<p className="text-xs font-bold">R.Router</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
