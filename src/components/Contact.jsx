import React from "react";

import {
	BsFillEnvelopeAtFill,
	BsFillPencilFill,
	BsFillTelephoneFill,
	BsLinkedin,
	BsDiscord,
	BsInstagram,
	BsWhatsapp,
	BsGithub,
} from "react-icons/bs";

const Contact = () => {
	return (
		<div className="flex justify-center py-24 tracking-wide text-white bg-blue-400">
			<div className="w-full max-w-xl p-8 text-white xl:max-w-4xl ">
				<div className="px-8 border-l-8 border-white ">
					<h1 className="w-1/2 mb-4 text-base font-bold">: : Contact Me</h1>

					<p className="text-justify ">
						bunch of ways you can connect with me:
					</p>
					<div className="gap-8 text-sm sm:flex">
						<div className="sm:w-1/2">
							<p className="mt-4">contacts:</p>
							<ul className="ml-2">
								<li className="flex items-center gap-2">
									<BsFillTelephoneFill />
									+62 8 xxxx xxxx xxxx
								</li>
								<li className="flex items-center gap-2">
									<BsFillEnvelopeAtFill />
									satyamahendra@gmail.com
								</li>
							</ul>
						</div>

						<div className="sm:w-1/3">
							<p className="mt-4">social media:</p>
							<ul className="flex flex-col justify-between text-2xl font-bold text-blue-400 sm:flex">
								<li>
									<a
										className="flex items-center gap-2 p-2 mb-2 bg-white rounded-xl"
										href="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
										target="_blank"
									>
										<BsLinkedin />
										<p className="text-xs">Ida Bagus Satya Mahendra</p>
									</a>
								</li>

								<li>
									<a
										className="flex items-center gap-2 p-2 mb-2 bg-white rounded-xl"
										href="https://discord.com/users/225262332157100034"
										target="_blank"
									>
										<BsDiscord />
										<p className="text-xs">satyamoray</p>
									</a>
								</li>

								<li>
									<a
										href="https://www.instagram.com/007satya_/"
										target="_blank"
										className="flex items-center gap-2 p-2 mb-2 bg-white items- rounded-xl"
									>
										<BsInstagram />
										<p className="text-xs">007satya_</p>
									</a>
								</li>

								<li>
									<a
										className="flex items-center gap-2 p-2 mb-2 bg-white rounded-xl"
										href="https://wa.me/6282254103639"
										target="_blank"
									>
										<BsWhatsapp />
										<p className="text-xs">ida bagus satya mahendra</p>
									</a>
								</li>

								<li>
									<a
										href="https://github.com/megatronhehe"
										target="_blank"
										className="flex items-center gap-2 p-2 mb-2 bg-white rounded-xl"
									>
										<BsGithub />
										<p className="text-xs">megatronhehe</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p className="mt-12 mb-4 ">... or you can send your message here!</p>
				<form className="flex flex-col ">
					<label for="email" className="flex items-center gap-4 mb-2 text-2xl">
						<BsFillEnvelopeAtFill />
						<p className="text-sm">Email</p>
					</label>
					<input
						id="email"
						className="p-4 mb-4"
						placeholder="youremail@youremail.com"
						type="email"
					/>
					<label
						for="message"
						className="flex items-center gap-4 mb-2 text-2xl"
					>
						<BsFillPencilFill />
						<p className="text-sm">message</p>
					</label>
					<input
						id="message"
						className="p-4"
						placeholder="your message here"
						type="text"
					/>
				</form>
			</div>
		</div>
	);
};

export default Contact;
