import React from "react";

// IMPORTs
import customerImg from "../assets/customerImg.svg";

const Customer = () => {
	return (
		<div className="customer_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="inner_customer">
						<div className="d-flex flex-column flex-md-row align-items-center">
							<div className="order-1 order-md-0 text-center text-md-start mt-5 mt-md-0">
								<h1 className="fw-bold middleBlueC">
									We serve thousands of new customers every week.
								</h1>
								<h3 className="mt-3 mb-4">
									Join other shoppers and try Thumela.com today.
								</h3>
								<div>
									<button className="btnBg border-0 text-white">
										Register today!
									</button>
								</div>
							</div>
							<div className="">
								<img src={customerImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customer;
