import React from "react";
import BasketItemBody from "../components/BasketItemBody";

const OrderRecommended = () => {
	return (
		<div className="basketitems_container recommend pt-5 pb-3 px-0 px-md-1">
			<div className="container-fluid">
				<h3>
					<span className="bottomLine">Rec</span>ommended for you
				</h3>

				{[1, 1, 1, 1].map((prev, i) => {
					return (
						<div key={i}>
							<BasketItemBody rec />
						</div>
					);
				})}

				<button className="cont_shopping fw-bold border-0 mt-4 rounded-3 py-3">
					Continue shopping
				</button>
			</div>
		</div>
	);
};

export default OrderRecommended;
