import React from "react";
import confirmationBox from "../assets/confirmationBox.svg";

const PaymentCompleted = () => {
	return (
		<div className="basketitems_container confirmation_top py-5 px-5 d-flex flex-column flex-md-row align-items-center">
			<div className="mt-3 mt-md-0 d-flex flex-column align-items-center align-items-md-start order-1 order-md-0">
				<h1 className="text-center text-md-start middleBlueC fw-bold f48">
					Your payment has been completed successfully
				</h1>
				<h4 className="fw-light grayC">Thank you for shopping with us.</h4>
				<button className="mt-2">Continue shopping</button>
			</div>
			<div className="">
				<img src={confirmationBox} alt="" />
			</div>
		</div>
	);
};

export default PaymentCompleted;
