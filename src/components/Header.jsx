import React from "react";

const Header = () => {
	return (
		<header className="flex flex-col items-center px-4 text-gray-500 sm:justify-between sm:flex-row sm:border-b">
			<h1 className="w-full py-2 text-xl font-semibold tracking-wide text-center text-blue-500 border-b sm:border-none sm:w-0">
				satya.dev
			</h1>
			<nav>
				<ul className="flex text-sm sm:gap-8">
					<li className="px-4 py-1 border-b border-l sm:px-0 rounded-bl-xl sm:border-none">
						home
					</li>
					<li className="px-4 py-1 border-b border-l sm:px-0 sm:border-none">
						about
					</li>
					<li className="px-4 py-1 border-b border-l sm:px-0 sm:border-none">
						projects
					</li>
					<li className="px-4 py-1 border-b border-x sm:px-0 sm:border-none rounded-br-xl">
						contact
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
