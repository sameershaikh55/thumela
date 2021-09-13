import React, { useEffect, useState } from "react";
import { useHooks } from "../Hooks/useHooks";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import TrackOrderC from "../components/TrackOrder";
import Feature from "../components/Feature";

const TrackOrder = () => {
	const { isOpen, OnClick } = useHooks();
	const [sidebar, setSidebar] = useState(false);

	useEffect(() => {
		document.body.style.background = "#f4f9fe";
	}, []);

	return (
		<>
			<div className="bg-page"></div>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<div className={`${isOpen && "sidebarActive"}`}>
				<Header
					sidebar={sidebar}
					setSidebar={setSidebar}
					ClickEvent={OnClick}
				/>

				{!sidebar && (
					<>
						{/* HEADER START */}
						<div className="my_order_body trackOrder">
							<div className="bg_blue">
								<div className="page_container position-relative">
									<div className="container-fluid">
										<div className="row">
											<div className="inner_order">
												<div className="col-12 pt-5">
													<p className="mainP text-white mb-0">
														<NavLink className="text-white" to="/">
															Home
														</NavLink>{" "}
														/{" "}
														<NavLink className="text-white" to="/">
															Meat & Fish
														</NavLink>{" "}
														/{" "}
														<NavLink className="text-white" to="/">
															Checkout
														</NavLink>
													</p>
													<h1 className="mainHead text-white mb-4 mb-md-0">
														Track Order
													</h1>
												</div>
												<div className="row mt-1 mt-md-3">
													<div className="col-12 col-lg-9">
														<TrackOrderC />
													</div>
													<div className="col-12 d-block d-md-none col-12">
														<button className="w-100 btnBg2 border-0 py-2 fw-bold mt-5">
															Back to My Orders
														</button>
													</div>
													<div className="col-12 d-none d-md-block col-lg-3">
														<div className="order_summary_container pt-2 pt-md-5 pb-1 px-3">
															<h3 className="fw-bold d-none d-md-block">
																<span className="bottomLine">Orde</span>r
																Summary
															</h3>

															<button className="loginBtn2 fw-bold w-100 border-0 py-2 rounded-3 mt-4">
																View Invoice
															</button>

															<hr className="hrBg mt-4 mb-2" />

															<div className="w-100 mb-3">
																<ul className="px-0 mb-0">
																	<li className="d-flex justify-content-between mb-0 py-1">
																		<p className="mb-0">Order Number</p>
																		<p className="mb-0 fw-bold">12378293T</p>
																	</li>
																	<li className="d-flex justify-content-between mb-0 py-1">
																		<p className="mb-0">Date</p>
																		<p className="mb-0">12 Feb 2020</p>
																	</li>
																	<li className="d-flex justify-content-between mb-0 py-1">
																		<p className="mb-0">Taxes</p>
																		<p className="mb-0">0%</p>
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
																	<button className="loginBtn text-white w-100 border-0 py-2 rounded-3">
																		Recorder
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* HEADER END */}

						<div className="d-none d-md-block">
							<Feature trackOrder />
						</div>
						<CTA />
						<Footer />
					</>
				)}
			</div>
		</>
	);
};

export default TrackOrder;
