import React, { useState } from "react";

import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";

const Navbar = () => {
	const nextSection = () => {
		const element = document.getElementById("about");
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
