import React, { useEffect, useState } from "react";

import ContactButton from "./ContactButton";

import { quotesData } from "../../data/data";

import { AnimatePresence, motion } from "framer-motion";

import { PiDiamondsFourFill } from "react-icons/pi";

import {
	BsFillEnvelopeAtFill,
	BsFillTelephoneFill,
	BsLinkedin,
	BsDiscord,
	BsInstagram,
	BsWhatsapp,
	BsGithub,
	BsDiamond,
} from "react-icons/bs";
import AnonymousMessageForm from "./AnonymousMessageForm";

const Contact = () => {
	const [quotesIndex, setQuotesIndex] = useState(0);
	const [toggleAnonMessageForm, setToggleAnonMessageForm] = useState(false);

	const randomizeQuotesIndex = () => {
		const randomNumber = Math.floor(Math.random() * quotesData.length);
		setQuotesIndex((prev) => (prev === randomNumber ? 0 : randomNumber));
	};

	const selectedQuote = quotesData[quotesIndex];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center justify-between h-screen py-8 sm:justify-around"
		>
			<div className="flex flex-col items-center justify-center gap-16">
				<PiDiamondsFourFill />
				<h1 className="text-3xl sm:text-5xl">Let's get in touch!</h1>

				<div className="flex flex-col items-center justify-center gap-2">
					<h2 className="sm:text-2xl">Social media</h2>
					<ul className="flex gap-4 text-3xl sm:text-4xl">
						<ContactButton
							name="Ida Bagus Satya Mahendra"
							icon={<BsLinkedin />}
							link="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
						/>

						<ContactButton
							name="007satya_"
							icon={<BsInstagram />}
							link="https://www.instagram.com/007satya_/"
						/>

						<ContactButton
							name="007satya_"
							icon={<BsDiscord />}
							link="https://discordapp.com/users/225262332157100034"
						/>

						<ContactButton
							name="megatronhehe"
							icon={<BsGithub />}
							link="https://github.com/megatronhehe"
						/>

						<ContactButton
							name="0822'5410'3639"
							icon={<BsWhatsapp />}
							link="https://wa.me/6282254103639"
						/>
					</ul>
				</div>

				<div className="flex flex-col items-center justify-center gap-2">
					<h2 className="sm:text-2xl">General contact</h2>
					<ul className="flex gap-4 text-3xl sm:text-4xl">
						<ContactButton
							name="satyamahendra09@gmail.com"
							icon={<BsFillEnvelopeAtFill />}
							link="mailto:satyamahendra09@gmail.com"
						/>
						<ContactButton
							name="0822'5410'3639"
							icon={<BsFillTelephoneFill />}
							link="https://wa.me/6282254103639"
						/>
					</ul>
				</div>

				{/* <button
					onClick={() => setToggleAnonMessageForm(true)}
					className="flex flex-col items-center justify-center gap-2 sm:text-lg"
				>
					<span className="px-4 duration-200 hover:bg-gray-100 hover:text-gray-800 rounded-xl">
						send me anonymous message
					</span>
				</button> */}
			</div>

			<div className="flex flex-col items-center justify-between text-xs text-gray-400 sm:text-sm ">
				<motion.button
					key={quotesIndex}
					animate={{ rotate: 360 }}
					transition={{ duration: 1.5 }}
				>
					<BsDiamond onClick={randomizeQuotesIndex} />
				</motion.button>

				<div className="h-20 ">
					<AnimatePresence mode="wait">
						<motion.div
							key={quotesIndex}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center"
						>
							<p className="p-4 text-center">"{selectedQuote.quote}"</p>
							<p>- {selectedQuote.by}</p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* <AnimatePresence>
				{toggleAnonMessageForm && (
					<AnonymousMessageForm
						setToggleAnonMessageForm={setToggleAnonMessageForm}
					/>
				)}
			</AnimatePresence> */}
		</motion.section>
	);
};

export default Contact;
