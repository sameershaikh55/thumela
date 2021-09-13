import React, { useEffect, useState } from "react";
import { useHooks } from "../Hooks/useHooks";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import OrderRecommended from "../components/OrderRecommended";
import OrderedItem from "../components/OrderedItem";

const MyOrders = () => {
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
						<div className="my_order_body ordered_items">
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
														My Orders
													</h1>
												</div>
												<div className="row mt-1 mt-md-3">
													<div className="col-12 col-lg-7">
														<OrderedItem />
													</div>
													<div className="col-12 col-lg-5">
														<OrderRecommended />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
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

export default MyOrders;
