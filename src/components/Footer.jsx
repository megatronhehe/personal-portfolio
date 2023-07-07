import React from "react";

import {
	BsLinkedin,
	BsDiscord,
	BsInstagram,
	BsWhatsapp,
	BsGithub,
} from "react-icons/bs";

const Footer = () => {
	return (
		<div>
			<div className="flex justify-around px-8 py-12 text-white bg-gray-600">
				<div className="pr-8 border-r border-blue-400">
					<h1 className="mb-4 text-xl">
						satya.<span className="text-blue-400">dev</span>
					</h1>
					<p className="font-semibold">Contact</p>
					<ul className="mb-4 text-xs">
						<li>(+62) 8 xx - xxxx - xxxx</li>
						<li>satya@hehe.com</li>
					</ul>
					<p className="font-semibold">Navigation</p>
					<ul className="text-xs">
						<li>home</li>
						<li>about</li>
						<li>projects</li>
						<li>contact</li>
					</ul>
				</div>

				<div className="pl-8">
					<div className="flex flex-col justify-between h-full text-xs">
						<div className="text-center">: :</div>
						<div className="text-center">
							<p>"if failure makes you stronger, you can never lose"</p>
							<p>- A. Tate</p>
						</div>
						<div className="flex justify-center">
							<ul className="flex items-end justify-around w-full py-4 text-2xl font-bold text-blue-400 sm:bg-gray-700 sm:max-w-sm rounded-xl sm:flex">
								<li>
									<a
										href="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
										target="_blank"
									>
										<BsLinkedin />
									</a>
								</li>
								<li>
									<a
										href="https://discord.com/users/225262332157100034"
										target="_blank"
									>
										<BsDiscord />
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/007satya_/"
										target="_blank"
									>
										<BsInstagram />
									</a>
								</li>
								<li>
									<a href="https://wa.me/6282254103639" target="_blank">
										<BsWhatsapp />
									</a>
								</li>
								<li>
									<a href="https://github.com/megatronhehe" target="_blank">
										<BsGithub />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<h1 className="p-4 text-xs text-center bg-gray-700 text-gray-5q00">
				made with love by satya, well not really with love, mostly with fingers
				- satya
			</h1>
		</div>
	);
};

export default Footer;
