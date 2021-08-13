import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ReceiptDetail = () => {
	return (
		<>
			<div className="basketitems_container checkout py-4 px-0 px-md-1">
				<div className="container-fluid">
					<h3>Recipient Details</h3>

					<div className="row mt-3">
						<div className="col-12 col-sm-6">
							<label htmlFor="Full Name">Full Name</label>
							<br />
							<input className="w-100" type="text" placeholder="John Doe" />
						</div>
						<div className="col-12 col-sm-6 mt-3 mt-sm-0">
							<label htmlFor="Receipients Phone Number">
								Receipients Phone Number
							</label>
							<br />
							<input
								className="w-100"
								type="text"
								placeholder="e.g +263 56 678 7654"
							/>
						</div>
						<div className="col-12 mt-5"></div>{" "}
						<label htmlFor="Receipients Phone Number">Shipping Address</label>
						<br />
						<div className="inp_container position-relative">
							<input
								className="w-100"
								type="text"
								placeholder="Type in the address"
							/>
							<HiOutlineLocationMarker
								className="location_icon"
								color="#4A5568"
							/>
						</div>
					</div>

					<div className="map_container col-12">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13332924.776495809!2d-127.00175520977125!3d35.32812489677012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1628854404138!5m2!1sen!2s"
							style={{ border: 0 }}
							allowFullScreen=""
							width="100%"
							loading="lazy"
							title="frame"
						></iframe>

						<div className="d-flex justify-content-end mt-3 mb-5">
							<button className="btnBg2 border-0 px-4 py-2 d-flex align-items-center fw-bold">
								<AiOutlinePlusCircle className="me-1" color="#0645B2" /> Add
								Recipient
							</button>
						</div>
					</div>

					{[1, 1].map((prev, i) => {
						return (
							<div key={i} className="border_cont info_sec p-3 col-12 mt-3">
								<div className="d-flex justify-content-between align-items-start">
									<div>
										<h6 className="name_">John Doe</h6>
										<h5 className="under_name mb-1">+263 56 678 7654</h5>
										<h5 className="under_name">
											14 Nertherby Drive, Paddonhurst, Bulawayo
										</h5>
									</div>
									<div className="d-flex align-items-center">
										<button className="middleBlueC border-0 bg-transparent d-flex align-items-center f12 fw-bold">
											<FiEdit color="#0645B2" className="me-2" />
											Edit
										</button>
										<button className="border-0 bg-transparent ms-4">
											<RiDeleteBin6Line fontSize="1rem" />
										</button>
									</div>
								</div>

								<div className="d-flex align-items-center">
									<input
										type="radio"
										name="gender"
										value="male"
										className="me-2"
									/>
									<label htmlFor="Male" className="f14 lighthCColor">
										Ship to this recipient
									</label>
								</div>
							</div>
						);
					})}

					<div className="border_cont p-3 col-12 mt-3">
						<div className="row">
							<div className="col-12 col-sm-6">
								<label htmlFor="Full Name">Full Name</label>
								<br />
								<input className="w-100" type="text" placeholder="John Doe" />
							</div>
							<div className="col-12 col-sm-6 mt-3 mt-sm-0">
								<label htmlFor="Receipients Phone Number">
									Receipients Phone Number
								</label>
								<br />
								<input
									className="w-100"
									type="number"
									placeholder="e.g +263 56 678 7654"
								/>
							</div>
							<div className="col-12 mt-5">
								<label htmlFor="Receipients Phone Number">
									Shipping Address
								</label>
								<br />
								<div className="inp_container position-relative">
									<input
										className="w-100"
										type="text"
										placeholder="23 Pembury Avenue, Paddonhurst"
									/>
									<HiOutlineLocationMarker
										className="location_icon"
										color="#4A5568"
									/>
								</div>
							</div>

							<div className="col-12 d-flex justify-content-end align-items-center mt-4">
								<button className="save_btn px-4 py-1 fw-bold border-0">
									Save
								</button>
								<button className="border-0 bg-transparent ms-3">
									<RiDeleteBin6Line fontSize="1.4rem" />
								</button>
							</div>
						</div>
					</div>

					<div className="payment_continue col-12 mt-4 d-flex justify-content-end">
						<button className="border-0 px-5 py-2">
							Continue with payment
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReceiptDetail;
