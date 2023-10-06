import React from "react";

import { BsGithub } from "react-icons/bs";
import { PiArrowSquareOutLight } from "react-icons/pi";

export const GithubCard = () => {
	return (
		<li className="flex-shrink-0 w-full h-48 sm:h-64 rounded-xl group">
			<a
				href="https://github.com/megatronhehe?tab=repositories"
				target="_blank"
				className="flex flex-col items-center justify-center w-full h-full gap-4 p-8 text-sm text-center duration-200 border dark:border-gray-600 group-hover:text-blue-400 group-hover:border-blue-400 rounded-xl sm:text-base"
			>
				<div className="flex items-center gap-2 text-4xl duration-200 group-hover:scale-110">
					<BsGithub />
					<PiArrowSquareOutLight />
				</div>
				check out my github repo for more projects
			</a>
		</li>
	);
};
