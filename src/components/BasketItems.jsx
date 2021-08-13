import React from "react";
import BasketItemBody from "../components/BasketItemBody";

const BasketItems = () => {
	return (
		<div className="basketitems_container py-5 px-0 px-md-1">
			<div className="container-fluid">
				<h3>
					<span className="bottomLine">Bas</span>ket items
				</h3>

				{[1, 1, 1, 1].map((prev, i) => {
					return (
						<div key={i}>
							<BasketItemBody />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BasketItems;
