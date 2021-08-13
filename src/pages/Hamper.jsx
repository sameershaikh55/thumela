import React, { useState } from "react";
import { useHooks } from "../Hooks/useHooks";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import AlsoInterested from "../components/AlsoInterested";
import ProductGallery from "../components/ProductGallery";

const Hamper = () => {
	const { isOpen, OnClick } = useHooks();
	const [sidebar, setSidebar] = useState(false);

	return (
		<>
			<div className="bg-page2"></div>
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
						{/* <div className="my_order_body"> */}
						<div className="">
							<div className="page_container">
								<div className="container-fluid">
									<div className="row mt-1 mt-md-3">
										<div className="col-12 col-lg-9">
											<ProductGallery />
										</div>
										<div className="col-12 col-lg-3">
											<div className="order_summary_container pt-2 pt-md-5 pb-1 px-3">
												<h3 className="fw-bold d-none d-md-block">
													<span className="bottomLine">Car</span>t Summary
												</h3>
												<hr className="hrBg mt-4 mb-2" />

												<div className="w-100 mb-3">
													<ul className="px-0 mb-0">
														<li className="d-flex justify-content-between mb-0 py-1">
															<p className="mb-0">Quantity</p>
															<p className="mb-0">12</p>
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
														<button className="loginBtn2 fw-bold w-100 border-0 py-3 rounded-3 mt-2">
															Continue to Payment
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<AlsoInterested />
						</div>
						{/* HEADER END */}

						<CTA />
						<Footer />
					</>
				)}
			</div>
		</>
	);
};

export default Hamper;
