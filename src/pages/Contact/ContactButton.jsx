import React, { useEffect, useState } from "react";

import { BsFillCaretUpFill } from "react-icons/bs";

const ContactButton = ({ icon, name }) => {
	const [showMedia, setShowMedia] = useState(false);

	return (
		<li
			onMouseEnter={() => setShowMedia(true)}
			onMouseLeave={() => setShowMedia(false)}
			className="relative flex justify-center"
		>
			{icon}
			{showMedia && (
				<>
					<h3 className="absolute flex justify-center p-2 text-sm text-center text-white bg-gray-600 rounded-md top-12">
						{name}
						<BsFillCaretUpFill className="absolute text-2xl text-gray-600 -top-4" />
					</h3>
				</>
			)}
		</li>
	);
};

export default ContactButton;
