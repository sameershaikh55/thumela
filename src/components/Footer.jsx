import React from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.svg";
import i1 from "../assets/uFooter/i1.svg";
import i2 from "../assets/uFooter/i2.svg";
import i3 from "../assets/uFooter/i3.svg";
import i4 from "../assets/uFooter/i4.svg";

import f1 from "../assets/footer/f1.svg";
import f2 from "../assets/footer/f2.svg";
import f3 from "../assets/footer/f3.svg";

const Footer = () => {
	return (
		<>
			<div className="footer_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 col-md-4 text-center text-md-start">
								<img src={logo} alt="logo" />
							</div>
							<div className="col-12 col-md-8 mt-5 mt-md-0">
								<div className="d-flex flex-column flex-md-row justify-content-between w-100">
									<div className="d-flex justify-content-between w-100 me-0 me-md-5">
										<div className="w-100">
											<h6 className="mb-4 text-uppercase fw600">My account</h6>
											<ul className="list-unstyled">
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Login
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Register
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Track Order
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="w-100">
											<h6 className="mb-4 text-uppercase fw600">
												Customer Services
											</h6>
											<ul className="list-unstyled">
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														FAQ’s
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Help Centre
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Contact us
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
									<div className="d-flex justify-content-between w-100 mt-5 mt-md-0">
										<div className="w-100">
											<h6 className="mb-4 text-uppercase fw600">legal</h6>
											<ul className="list-unstyled">
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Terms & Conditions
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Privacy Policy
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Cookies Policy
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														Return Policy
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="w-100">
											<h6 className="mb-4 text-uppercase fw600">Contacts</h6>
											<ul className="list-unstyled">
												<li className="mb-1 mb-sm-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														(+27) 67 678 4567
													</NavLink>
												</li>
												<li className="mb-1 mb-sm-2">
													<a className="blueC" href="mailto:help@thumela.co.za">
														help@thumela.co.za
													</a>
												</li>
												<li className="contact_cont mb-2">
													<NavLink
														className="text-decoration-none lighthCColor"
														to=""
													>
														<img src={f1} alt="" />
														<img className="ms-2" src={f2} alt="" />
														<img className="ms-2" src={f3} alt="" />
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* UNDER FOOTER START */}
			<div className="underFooter_container py-2 py-sm-0">
				<div className="page_container h-100">
					<div className="container-fluid h-100">
						<div className="h-100 d-flex flex-column flex-md-row justify-content-between align-items-center">
							<h6 className="mb-0 text-white fw-lighter">
								© Thumela.com 2020 All rights reserved
							</h6>
							<div className="mt-2 mt-sm-0">
								<img src={i1} alt="" />
								<img className="ms-2 ms-sm-3" src={i2} alt="" />
								<img className="ms-2 ms-sm-3" src={i3} alt="" />
								<img className="ms-2 ms-sm-3" src={i4} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* UNDER FOOTER END */}
		</>
	);
};

export default Footer;
