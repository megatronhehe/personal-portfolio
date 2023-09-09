import { useContext, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import ThemeContext from "./context/ThemeContext";

function App() {
	const [sectionInView, setSectionInView] = useState("home");

	const { darkMode } = useContext(ThemeContext);

	return (
		<main className={darkMode ? "dark" : ""}>
			<div className="text-gray-600 transition-colors duration-1000 font-extralight dark:bg-gray-800 dark:text-gray-300">
				<Navbar
					sectionInView={sectionInView}
					setSectionInView={setSectionInView}
				/>
				<Home setSectionInView={setSectionInView} />
				<About setSectionInView={setSectionInView} />
				<Contact setSectionInView={setSectionInView} />
			</div>
		</main>
	);
}

export default App;
