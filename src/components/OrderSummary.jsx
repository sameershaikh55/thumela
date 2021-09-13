import React from "react";
import uFooter from "../assets/uFooter/i1.svg";

const OrderSummary = () => {
	return (
		<div className="basketitems_container py-5 px-0 px-md-1">
			<div className="container-fluid">
				<h3>
					<span className="bottomLine">Order</span> Summary
				</h3>

				<div className="mt-5 d-flex justify-content-between align-items-end">
					<p className="mb-0 lighthCColor f14">
						An email confirmation will be sent to{" "}
						<a
							className="lighthCColor text-decoration-none fw-bold"
							href="mailto:johndoe@email.com"
						>
							johndoe@email.com
						</a>{" "}
						with your order details.
						<br />
						<br />
						Your order number: <a href="">12545RT</a>
					</p>
					<div className="btnBg2">
						<button className="px-4 py-1 fw600 f12 border-0 btnBg4">
							Track
						</button>
					</div>
				</div>

				<hr className="hrBg my-4" />

				<h5 className="middleBlueC fw-bold">Ordered Items</h5>
				<div className="d-flex justify-content-between mt-4 py-2 allBorder rounded-3 px-3">
					<h6 className="f14 py-1 mb-0 fw600">12 Items</h6>
					<h6 className="f14 py-1 mb-0 fw600">$1000</h6>
				</div>

				<h5 className="mt-4 middleBlueC fw-bold">Recipient Details</h5>
				<div className="mt-4 py-2 allBorder rounded-3 px-3">
					<h6 className="f14 py-1 mb-0 fw-bold">John Doe</h6>
					<h6 className="f14 py-1 mb-0 lightestGray">+263 56 678 7654</h6>
					<h6 className="f14 py-1 mb-0 lightestGray">
						14 Nertherby Drive, Paddonhurst, Bulawayo
					</h6>
				</div>

				<h5 className="mt-4 middleBlueC fw-bold">Payment Details</h5>
				<div className="mt-4 py-2 allBorder rounded-3 px-3 d-flex justify-content-between align-items-center">
					<h6 className="f14 py-1 mb-0 fw-bold">Visa **4165</h6>
					<div>
						<img src={uFooter} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
