import React from "react";

const FeaturesSection = ({ features }) => {
	return (
		<div className="h-24 overflow-auto sm:h-full">
			<ul className="flex flex-wrap gap-2 ">
				{features.map((feature, i) => (
					<p
						key={i}
						className="flex-grow px-3 py-1 text-center border border-gray-600 rounded-full "
					>
						{feature}
					</p>
				))}
			</ul>
		</div>
	);
};

export default FeaturesSection;
