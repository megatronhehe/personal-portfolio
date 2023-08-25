import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
	const [sectionIndex, setSectionIndex] = useState(0);

	useEffect(() => {
		setSectionIndex(0);
	}, []);

	return (
		<main className="text-gray-600 font-extralight">
			<Navbar sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} />
			<Home setSectionIndex={setSectionIndex} />
			<About setSectionIndex={setSectionIndex} />
			<Contact setSectionIndex={setSectionIndex} />
		</main>
	);
}

export default App;
