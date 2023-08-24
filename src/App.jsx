import { Fragment, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";

function App() {
	return (
		<main className="text-gray-600 font-extralight">
			<Navbar />
			<Home />
			<About />
			{/* <Projects />
			<Contact />
			<Footer /> */}
		</main>
	);
}

export default App;
