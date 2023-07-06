import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<div className="my-24">
				<Home />
			</div>
			<div className="my-24">
				<About />
			</div>
			<div className="my-24">
				<Projects />
			</div>
			<div className="my-24">
				<Contact />
			</div>
		</>
	);
}

export default App;
