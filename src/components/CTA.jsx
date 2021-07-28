import React from "react";
import { NavLink } from "react-router-dom";

const CTA = () => {
	return (
		<div className="CTA_container py-4">
			<div className="page_container">
				<div className="container-fluid text-center">
					<h5 className="mb-0">
						For any inquiries, <NavLink to="">Contact us</NavLink>
					</h5>
					<h5 className="mb-0">and we will be happy to help</h5>
				</div>
			</div>
		</div>
	);
};

export default CTA;
