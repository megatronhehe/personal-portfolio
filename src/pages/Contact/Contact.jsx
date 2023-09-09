import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

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

const Contact = ({ setSectionInView }) => {
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			setSectionInView("contact");
		}
	}, [inView]);

	const [quotesIndex, setQuotesIndex] = useState(0);

	const randomizeQuotesIndex = () => {
		const randomNumber = Math.floor(Math.random() * quotesData.length);
		setQuotesIndex((prev) => (prev === randomNumber ? 0 : randomNumber));
	};

	const selectedQuote = quotesData[quotesIndex];

	return (
		<section
			ref={ref}
			id="contact"
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
		</section>
	);
};

export default Contact;
