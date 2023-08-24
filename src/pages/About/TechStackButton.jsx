import React, { useEffect, useState } from "react";

export const TechStackButton = ({ title, icon, color }) => {
	const [showTitle, setShowTitle] = useState(false);

	useEffect(() => {
		if (showTitle) {
			setTimeout(() => {
				setShowTitle(false);
			}, 1500);
		}
	}, [showTitle]);

	return (
		<li
			onMouseEnter={() => setShowTitle(true)}
			onMouseLeave={() => setShowTitle(false)}
			className={`relative flex items-center justify-center w-12 h-12 rounded-xl sm:w-16 sm:h-16 bg-${color}`}
		>
			{icon}
			{showTitle && (
				<h3
					className={`font-semibold absolute flex items-center text-center justify-center flex-col rounded-lg text-sm -bottom-8  px-3 py-1 bg-${color}`}
				>
					{title}
				</h3>
			)}
		</li>
	);
};
