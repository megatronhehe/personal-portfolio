import React from "react";
import satya from "../assets/satyajpg2.jpg";

import { BsLinkedin, BsGithub, BsDownload } from "react-icons/bs";

const Home = () => {
	return (
		<div className="flex justify-center tracking-wide">
			<div className="max-w-xl p-8 text-gray-500 xl:max-w-4xl ">
				<div className="px-8 border-l-8 border-blue-400 xl:flex">
					<div>
						<p>Hi, I'm</p>
						<h1 className="pb-2 mb-4 text-2xl text-blue-500 border-b border-blue-500">
							Satya Mahendra
						</h1>

						<div className="flex justify-center gap-4 text-2xl">
							<img
								src={satya}
								className="w-2/3 shadow-lg xl:w-full rounded-2xl"
							/>
						</div>
					</div>

					<div className="flex-col justify-between xl:px-4 xl:bg-gray-100 xl:ml-8 xl:flex rounded-xl">
						<h2 className="my-8 text-xl font-semibold">
							Frontend <span className="font-bold text-blue-300">React</span>{" "}
							Web Dev.
						</h2>
						<p className="text-justify">
							A passionate frontend React web developer passionate on building
							interactive and responsive web app
						</p>
						<p className="my-4 text-end">. . nice to meet you!</p>

						<div className="flex justify-between px-4 py-4 bg-gray-100 rounded-xl">
							<div className="flex gap-4">
								<a
									href="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
									target="_blank"
									className="p-2 text-3xl text-blue-400 bg-white rounded-xl"
								>
									<BsLinkedin />
								</a>
								<a
									href="https://github.com/megatronhehe"
									target="_blank"
									className="p-2 text-3xl text-blue-400 bg-white rounded-xl"
								>
									<BsGithub />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
