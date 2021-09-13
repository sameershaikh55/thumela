import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import uFooter from "../assets/uFooter/i1.svg";
import { BsCircle } from "react-icons/bs";

const TrackOrderC = () => {
	return (
		<div>
			<div className="basketitems_container py-5 px-0 px-md-1">
				<div className="container-fluid">
					<h5 className="fw-light f20 middleBlueC">
						Shipment for <br className="d-block d-md-none" /> Order Number:{" "}
						<span className="fw-bold">12545RT</span>
					</h5>

					<div className="d-flex flex-row flex-md-column mt-4">
						<div className="green_line"></div>
						<div className="d-flex flex-column flex-md-row justify-content-between ms-3 ms-md-0 mt-0 mt-md-3">
							<div className="d-flex align-items-start">
								<FaCheckCircle color="#3BAA6F" fontSize="1rem" />
								<div className="ms-2">
									<h6 className="mb-1 lighthCColor f14">Order Confirmed</h6>
									<p className="mb-0 lightestGray f12 lh-sm">
										We are preparing to <br />
										ship your items. <br />
										17:45PM CAT, 15 Feb 2020
									</p>
								</div>
							</div>

							<div className="d-flex align-items-start">
								<FaCheckCircle color="#3BAA6F" fontSize="1rem" />
								<div className="ms-2">
									<h6 className="mb-1 lighthCColor f14">Shipped</h6>
									<p className="mb-0 lightestGray f12 lh-sm">
										Your order is on its way. <br /> 20 Feb 2020{" "}
									</p>
								</div>
							</div>

							<div className="d-flex align-items-start">
								<BsCircle color="#ccc" fontSize="1rem" />
								<div className="ms-2">
									<h6 className="mb-1 lighthCColor f14">To Deliver</h6>
									<p className="mb-0 lightestGray f12 lh-sm">
										Estimated Date: <br /> 23 Feb 2020{" "}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="d-flex d-md-none justify-content-between px-4 mt-4 py-3 shadow rounded-3 bg-white">
						<div>
							<h5 className="f14 mb-0">12 Items</h5>
							<a className="f14 text-decoration-none" href="#">
								Show Order Details
							</a>
						</div>
						<h5 className="f14">R1,206.59</h5>
					</div>

					<h5 className="mt-4 mt-md-5 middleBlueC fw-bold">
						Recipient Details
					</h5>
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
		</div>
	);
};

export default TrackOrderC;
