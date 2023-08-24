import React, { useEffect, useState } from "react";

import ContactButton from "./ContactButton";

import { quotesData } from "../../data/data";

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
	BsFillCaretUpFill,
} from "react-icons/bs";

const Contact = () => {
	const [quotesIndex, setQuotesIndex] = useState(0);

	const randomizeQuotesIndex = () => {
		const randomNumber = Math.floor(Math.random() * quotesData.length);
		setQuotesIndex(randomNumber);
	};

	const selectedQuote = quotesData[quotesIndex];

	return (
		<section
			id="contact"
			className="flex flex-col items-center justify-between h-screen py-8 sm:justify-around"
		>
			<div className="flex flex-col items-center justify-center gap-16">
				<PiDiamondsFourFill />
				<h1 className="text-3xl">Get in touch with me!</h1>

				<div className="flex flex-col items-center justify-center gap-2">
					<h2>Social media</h2>
					<ul className="flex gap-4 text-3xl">
						<ContactButton
							name="Ida Bagus Satya Mahendra"
							icon={<BsLinkedin />}
						/>

						<ContactButton name="007satya_" icon={<BsInstagram />} />

						<ContactButton name="007satya_" icon={<BsDiscord />} />

						<ContactButton name="megatronhehe" icon={<BsGithub />} />

						<ContactButton name="0822'5410'3639" icon={<BsWhatsapp />} />
					</ul>
				</div>

				<div className="flex flex-col items-center justify-center gap-2">
					<h2>General contact</h2>
					<ul className="flex gap-4 text-3xl">
						<ContactButton
							name="satyamahendra09@gmail.com"
							icon={<BsFillEnvelopeAtFill />}
						/>
						<ContactButton
							name="0822'5410'3639"
							icon={<BsFillTelephoneFill />}
						/>
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-center justify-between text-xs text-gray-400 h-28">
				<BsDiamond onClick={randomizeQuotesIndex} />
				<p className="p-4 text-center">{selectedQuote.quote}</p>
				<p>{selectedQuote.by}</p>
			</div>
		</section>
	);
};

export default Contact;
