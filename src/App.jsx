import { useContext, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import ThemeContext from "./context/ThemeContext";

function App() {
	const [sectionIndex, setSectionIndex] = useState(0);

	const { darkMode } = useContext(ThemeContext);

	useEffect(() => {
		setSectionIndex(0);
	}, []);

	return (
		<main className={darkMode ? "dark" : ""}>
			<div className="text-gray-600 font-extralight dark:bg-gray-800 dark:text-gray-300">
				<Navbar sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} />
				<Home setSectionIndex={setSectionIndex} />
				<About setSectionIndex={setSectionIndex} />
				<Contact setSectionIndex={setSectionIndex} />
			</div>
		</main>
	);
}

export default App;
