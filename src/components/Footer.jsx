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
		<div className="">
			<div className="grid grid-cols-3 py-12 text-sm text-gray-200 bg-gray-600 p-y">
				<div className="ml-2 border-r-4 border-blue-400 sm:ml-12">
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
				<div className="flex flex-col justify-between col-span-2">
					<div className="text-center">: :</div>
					<div className="text-center">
						<p>"if failure makes you stronger, you can never lose"</p>
						<p>- A. Tate</p>
					</div>
					<ul className="flex items-end justify-around text-2xl font-bold text-blue-400 sm:flex">
						<li>
							<BsLinkedin />
						</li>
						<li>
							<BsDiscord />
						</li>
						<li>
							<BsInstagram />
						</li>
						<li>
							<BsWhatsapp />
						</li>
						<li>
							<BsGithub />
						</li>
					</ul>
				</div>
			</div>
			<h1 className="py-4 text-xs text-center text-gray-400 bg-gray-600">
				made with love by satya, well not really with love, mostly with fingers
				- satya
			</h1>
		</div>
	);
};

export default Footer;
