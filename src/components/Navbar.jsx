import React, { useEffect, useState } from "react";

import InfoModal from "./InfoModal";

import {
	PiCaretDownLight,
	PiCaretUpLight,
	PiCaretDoubleUpLight,
	PiCaretDoubleDownLight,
	PiSquaresFourFill,
	PiHouseLight,
	PiUserLight,
	PiEnvelopeLight,
	PiInfoLight,
} from "react-icons/pi";

const Navbar = ({ sectionIndex, setSectionIndex }) => {
	const sectionsArray = ["home", "about", "contact"];

	const [toggleNavbar, setToggleNavbar] = useState(false);
	const [toggleInfoModal, setToggleInfoModal] = useState(false);

	const nextSection = () => {
		const newIndex = (sectionIndex + 1) % sectionsArray.length;
		setSectionIndex(newIndex);
		scrollToSection(sectionsArray[newIndex]);
	};

	const prevSection = () => {
		const newIndex =
			sectionIndex === 0 ? sectionsArray.length - 1 : sectionIndex - 1;
		setSectionIndex(newIndex);
		scrollToSection(sectionsArray[newIndex]);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		scrollToSection(sectionsArray[sectionIndex]);
	}, [sectionIndex]);

	return (
		<>
			<nav className="fixed z-40 bottom-1 right-1">
				<button onClick={nextSection}>
					{sectionIndex === sectionsArray.length - 1 ? (
						<PiCaretDoubleUpLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					) : (
						<PiCaretDownLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					)}
				</button>
			</nav>

			<nav className="fixed z-40 top-1 right-1">
				<button onClick={prevSection}>
					{sectionIndex === 0 ? (
						<PiCaretDoubleDownLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					) : (
						<PiCaretUpLight className="w-10 h-10 p-2 bg-white border rounded-full shadow-md sm:h-20 sm:w-20 sm:p-6" />
					)}
				</button>
			</nav>

			<nav className="fixed z-40 bottom-1 left-1">
				<ul className="flex flex-col-reverse gap-2">
					<li
						onClick={() => setToggleNavbar((prev) => !prev)}
						className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-white border shadow-md sm:h-20 sm:w-20 sm:text-4xl rounded-xl"
					>
						<PiSquaresFourFill />
					</li>
					{toggleNavbar && (
						<>
							<li
								onClick={() => setToggleInfoModal(true)}
								className="flex items-center justify-center w-10 h-10 text-2xl text-white bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
							>
								<PiInfoLight />
							</li>

							<li
								onClick={() => setSectionIndex(2)}
								className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
							>
								<PiEnvelopeLight />
							</li>

							<li
								onClick={() => setSectionIndex(1)}
								className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
							>
								<PiUserLight />
							</li>

							<li
								onClick={() => setSectionIndex(0)}
								className="flex items-center justify-center w-10 h-10 text-2xl text-blue-400 bg-gray-700 rounded-full shadow-md sm:h-20 sm:w-20 sm:text-4xl"
							>
								<PiHouseLight />
							</li>
						</>
					)}
				</ul>
			</nav>
			{toggleInfoModal && <InfoModal setToggleInfoModal={setToggleInfoModal} />}
		</>
	);
};

export default Navbar;
