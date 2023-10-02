import { useContext, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

import { Routes, Route, useLocation } from "react-router-dom";

import ThemeContext from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";

function App() {
	const { darkMode } = useContext(ThemeContext);

	const location = useLocation();

	return (
		<main className={darkMode ? "dark" : ""}>
			<div className="text-gray-600 transition-colors duration-1000 font-extralight dark:bg-gray-800 dark:text-gray-300">
				<Navbar />

				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</AnimatePresence>
			</div>
		</main>
	);
}

export default App;
