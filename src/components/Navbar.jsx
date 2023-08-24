import React, { useState } from "react";

import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";

const Navbar = () => {
	const sectionsArray = ["home", "about", "contact"];

	const [sectionIndex, setSectionIndex] = useState(0);

	const nextSection = () => {
		setSectionIndex((prev) =>
			prev === sectionsArray.length - 1 ? 0 : prev + 1
		);
		const element = document.getElementById(sectionsArray[sectionIndex]);
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<nav className="fixed z-40 bottom-1 right-1">
				<button onClick={nextSection}>
					<PiCaretDownLight className="w-10 h-10 p-2 bg-white border rounded-full" />
				</button>
			</nav>
			;
		</>
	);
};

export default Navbar;
