import React from "react";
import cross from "../assets/cross.svg";
import Cart from "./Cart";

const Sidebar = ({ isOpen, ClickEvent }) => {
	if (isOpen) {
		document.body.style.overflowY = "hidden";
		document.body.style.paddingRight = "17px";
	} else {
		document.body.style.overflowY = "auto";
		document.body.style.paddingRight = "0px";
	}
	return (
		<div
			// onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				right: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer px-2 pt-3"
		>
			<div className="container-fluid">
				<div>
					<img
						onClick={ClickEvent}
						src={cross}
						alt="cross"
						className="pointer"
					/>
				</div>

				<div>
					<h3 className="middleBlueC fw500 mb-5">
						<span className="bottomLine pb-2">My </span>Basket
					</h3>

					{[1, 1, 1, 1].map((p, i) => {
						return (
							<div key={i}>
								<hr className="hrBg" />
								<Cart />
							</div>
						);
					})}
				</div>

				<div className="position-absolute w-100 bottom-0 start-0 px-3 mb-3">
					<ul className="px-0 mb-0">
						<hr className="hrBg mb-1" />
						<li className="d-flex justify-content-between mb-0 py-1">
							<p className="mb-0">Quantity</p>
							<p className="mb-0">12</p>
						</li>
						<li className="d-flex justify-content-between mb-0 py-1">
							<p className="mb-0">Subtotal</p>
							<p className="mb-0">R1,206.59</p>
						</li>
						<li className="d-flex justify-content-between mb-0 py-1">
							<p className="mb-0">Taxes</p>
							<p className="mb-0">Calculated at checkout</p>
						</li>
						<li className="d-flex justify-content-between mb-0 py-1">
							<p className="mb-0">Discount</p>
							<p className="mb-0 fw-bold">R0.00</p>
						</li>
					</ul>

					<hr className="hrBg mt-1 mb-2" />

					<div className="d-flex justify-content-between">
						<h5 className="fw600">Total</h5>
						<h5 className="fw600">R1,206.59</h5>
					</div>

					<div className="mt-3 w-100">
						<button className="loginBtn text-white w-100 border-0 py-3 rounded-3">
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
