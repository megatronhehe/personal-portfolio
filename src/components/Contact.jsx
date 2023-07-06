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
					<div className="mb-12 text-sm">
						<h1 className="w-1/2 mb-4 text-base font-bold">: : Contact Me</h1>

						<p className="text-justify ">
							bunch of ways you can connect with me:
						</p>

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

						<p className="mt-4">social media:</p>
						<ul className="flex flex-col justify-between text-2xl font-bold text-blue-400 sm:flex">
							<li className="flex items-center justify-between gap-2 p-2 mb-2 bg-white rounded-xl">
								<BsLinkedin />
								<p className="text-xs">Ida Bagus Satya Mahendra</p>
							</li>
							<li className="flex items-center justify-between gap-2 p-2 mb-2 bg-white rounded-xl">
								<BsDiscord />
								<p className="text-xs">satyamoray</p>
							</li>
							<li className="flex items-center justify-between gap-2 p-2 mb-2 bg-white items- rounded-xl">
								<BsInstagram />
								<p className="text-xs">007satya_</p>
							</li>
							<li className="flex items-center justify-between gap-2 p-2 mb-2 bg-white rounded-xl">
								<BsWhatsapp />
								<p className="text-xs">ida bagus satya mahendra</p>
							</li>
							<li className="flex items-center justify-between gap-2 p-2 mb-2 bg-white rounded-xl">
								<BsGithub />
								<p className="text-xs">megatronhehe</p>
							</li>
						</ul>
					</div>
				</div>
				<p className="mb-4">... or you can send your message here!</p>
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
