import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import { BsIncognito } from "react-icons/bs";

const AnonymousMessageForm = ({ setToggleAnonMessageForm }) => {
	const initialStatusState = {
		sending: false,
		error: false,
		errorMsg: "",
		success: false,
		successMsg: "",
	};

	const [status, setStatus] = useState(initialStatusState);

	const form = useRef();

	const sendEmail = (e) => {
		setStatus(initialStatusState);
		setStatus((prev) => ({ ...prev, sending: true }));
		e.preventDefault();

		emailjs
			.sendForm(
				"service_3tdanjm",
				"template_7mmvdhs",
				form.current,
				"TTUZlTHdWBSuG-rcq"
			)
			.then(() => {
				setStatus((prev) => ({ ...prev, success: true, successMsg: "sent!" }));
			})
			.catch(() => {
				setStatus((prev) => ({ ...prev, error: true, errorMsg: "error" }));
			})

			.finally(() => {
				setStatus((prev) => ({ ...prev, sending: false }));
			});
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setToggleAnonMessageForm(false)}
			className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full backdrop-filter backdrop-blur-sm bg-opacity-10 "
		>
			<motion.form
				ref={form}
				onSubmit={sendEmail}
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}
				exit={{ y: "-100vh" }}
				transition={{ type: "tween" }}
				onClick={(e) => e.stopPropagation()}
				className="relative flex flex-col items-center justify-center w-full max-w-lg gap-4 p-4 h-1/3"
			>
				<textarea
					className="w-full h-full p-8 text-center text-gray-100 bg-gray-800 border border-gray-600 outline-none rounded-xl"
					name="message"
					placeholder="your secret message here "
				/>

				<input
					type="submit"
					className="w-24 px-3 py-1 font-semibold text-center bg-blue-400 rounded-xl"
					value={`${
						status.sending
							? "sending..."
							: status.success
							? status.successMsg
							: "send"
					}`}
				/>

				<span>{status.error && status.errorMsg}</span>

				<BsIncognito className="absolute w-12 h-12 p-2 bg-gray-800 border rounded-full -top-2" />
			</motion.form>
		</motion.section>
	);
};

export default AnonymousMessageForm;
