import React from "react";
import { AiFillQuestionCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { BsLock } from "react-icons/bs";
import PayCard from "./PayCard";

const PayWithCard = () => {
	return (
		<div className="basketitems_container payment_with_card pt-4 pb-2 pt-md-5 pb-md-5 px-0 px-md-1">
			<div className="container-fluid">
				<div className="d-flex">
					<div className="d-none d-md-block mt-1">
						<FaCheckCircle color="#3BAA6F" />
					</div>
					<div className="ms-md-3 w-100">
						<div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
							<h3>Pay with a saved card</h3>
							<div className="d-flex justify-content-end align-self-end">
								<button className="btnBg2 border-0 px-4 py-2 d-flex align-items-center fw-bold">
									<AiOutlinePlusCircle className="me-1" color="#0645B2" /> Add
									Recipient
								</button>
							</div>
						</div>

						{[1, 1].map(() => {
							return <PayCard />;
						})}

						<div className="payment_cont my-4 px-3 py-3">
							<h4 className="middleBlueC fw600">You are about to pay...</h4>

							<div className="row gx-2 gy-3 mt-3">
								<div className="col-12 col-md-3">
									<label className="f14 fw600" for="first_name">
										Converted Amount <AiFillQuestionCircle fontSize="1rem" />
									</label>
									<br />
									<div className="single_pay px-2 w-100 f14 fw600">
										$1,206.59
									</div>
								</div>
								{/* <div className="px-1"></div> */}
								<div
									style={{ whiteSpace: "nowrap" }}
									className="col-12 col-md-4"
								>
									<label className="f14 fw600" for="first_name">
										Exchange Rate
									</label>
									<br />
									<div className="single_pay px-2 w-100 f14 fw600">
										1.00 USD = 16.30544 ZAR
									</div>
								</div>
								{/* <div className="px-1"></div> */}
								<div className="col-12 col-sm-6 col-md-2">
									<label className="f14 fw600" for="first_name">
										CVV <AiFillQuestionCircle fontSize="1rem" />
									</label>
									<br />
									<div className="single_pay px-2 w-100 d-flex align-items-center justify-content-between px-3">
										<div>000</div> <BsLock />
									</div>
								</div>
								{/* <div className="px-1"></div> */}
								<div className="col-12 col-sm-6 col-md-3">
									<label className="grayC f14 fw500" for="first_name">
										<BsLock /> Secure Checkout
									</label>
									<br />
									<div className="single_pay last px-2 w-100">Make payment</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PayWithCard;
