import React from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
	return (
		<>
			{/* UPPER TOP HEADER START */}
			<div className="upper_header d-none d-md-flex align-items-center w-100">
				<div className="page_container w-100">
					<div className="container-fluid">
						<div className="d-flex justify-content-end">
							<NavLink className="text-decoration-none me-5 grayC" to="">
								Help Centre
							</NavLink>
							<div>
								<NavLink className="text-decoration-none blueC" to="">
									Login |{" "}
								</NavLink>
								<NavLink className="text-decoration-none blueC" to="">
									Signup
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* UPPER TOP HEADER END */}

			{/* UNDER HEADER START */}
			<div className="header_container bg-white pt-3 pb-1 py-md-4">
				<div className="page_container">
					<div className="container-fluid">
						<div className="d-none d-md-flex justify-content-between align-items-center">
							<div className="w-100">
								<img src={logo} alt="logo" />
							</div>
							<div className="d-flex w-100">
								<div className="inp_container position-relative w-100">
									<input
										className="rounded-3 py-2 w-100"
										type="text"
										name=""
										id=""
										placeholder="Find a product"
									/>
									<div className="searchIcon">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
												stroke="#BFD0D8"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</div>
								<button className="btnBg border-0 py-2 text-white px-4 small d-flex align-items-center justify-content-center rounded-3 ms-2">
									<div className="mt-1">R0.00</div>
									<HiOutlineShoppingBag className="ms-1" />
								</button>
							</div>
						</div>

						{/* MOBILE SCREEN START */}
						<div className="header_containerM d-block d-md-none">
							<div className="d-flex justify-content-between">
								<div className="d-flex align-items-center">
									<div className="me-2">
										<GiHamburgerMenu fontSize="1.2rem" color="#0645B2" />
									</div>
									<div className="logo_cont">
										<img src={logo} alt="" />
									</div>
								</div>
								<div>
									<button className="btnBg border-0 py-1 text-white px-3 small d-flex align-items-center justify-content-center rounded-3 ms-2">
										<div className="mt-1">R0.00</div>
										<HiOutlineShoppingBag className="ms-1" />
									</button>
								</div>
							</div>
							<div>
								<div className="inp_container position-relative w-100 mt-2">
									<input
										className="rounded-3 py-1 w-100"
										type="text"
										name=""
										id=""
										placeholder="Find a product"
									/>
									<div className="searchIcon">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
												stroke="#BFD0D8"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
						{/* MOBILE SCREEN END */}

						<div className="nav_links py-1 mt-2 mt-md-4">
							<NavLink className="fw600 darkBlueC text-decoration-none" to="">
								<span className="bottomLine pb-1 pb-md-2">Meat & </span>Fish
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Fruit & Veg
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Bakery
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Food Cupboard
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Household
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Toiletries & Beauty
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Stationary
							</NavLink>
							<NavLink className="grayC ms-3 text-decoration-none" to="">
								Drinks
							</NavLink>
						</div>
					</div>
				</div>
			</div>
			{/* UNDER HEADER END */}
		</>
	);
};

export default Header;
