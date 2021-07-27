import React from "react";

// IMPORTS
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import product from "../assets/product.svg";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Hampers = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<div className="hampers_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between">
						<h4 className="middleBlueC fw-bold">
							<span className="bottomLine pb-1">Ham</span>
							pers
						</h4>
						<NavLink className="blueC" to="">
							View all
						</NavLink>
					</div>

					<div className="row d-none d-md-flex mt-4">
						{[1, 1, 1].map(() => {
							return (
								<div className="col-4">
									<div className="hamper_card pb-3 rounded-3">
										<div className="text-center my-4">
											<img src={product} alt="" />
										</div>

										<div className="px-3">
											<div className="d-flex align-items-center mb-3">
												<span className="greenBgStar px-2">
													<AiFillStar className="me-1 dGreenC" />
													<span className="dGreenC fw-bold">On Special</span>
												</span>
											</div>
											<h6 className="h_name lighthCColor">
												Douwe Egberts Instant Coffee Pure Gold Medium Roast -
												200g Jar
											</h6>
											<h5 className="fw-bold mb-0">$45.99</h5>
											<p className="cut_tag lighthCColor text-decoration-line-through">
												$63.99
											</p>

											<div className="d-flex justify-content-between align-items-center">
												<div className="quantity_cont">
													<button className="border-0 bg-transparent">
														<AiOutlineMinus />
													</button>
													<input
														className="border-0 mx-3 text-center"
														type="number"
														name=""
														id=""
														value="0"
													/>
													<button className="border-0 bg-transparent">
														<AiOutlinePlus />
													</button>
												</div>
												<div className="w-100">
													<button className="w-100 aocBtn border-0 middleBlueC py-2 rounded-3 fw-bold">
														Add to cart
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					<div className="row d-flex d-md-none mt-4">
						<div className="col-12 px-0">
							<Slider {...settings}>
								{[1, 1, 1].map(() => {
									return (
										<div className="col-4">
											<div className="hamper_card pb-3 rounded-3">
												<div className="d-flex justify-content-center my-4">
													<img src={product} alt="" />
												</div>

												<div className="px-3">
													<div className="d-flex align-items-center mb-3">
														<span className="greenBgStar px-2">
															<AiFillStar className="me-1 dGreenC" />
															<span className="dGreenC fw-bold">
																On Special
															</span>
														</span>
													</div>
													<h6 className="h_name lighthCColor">
														Douwe Egberts Instant Coffee Pure Gold Medium Roast
														- 200g Jar
													</h6>
													<h5 className="fw-bold mb-0">$45.99</h5>
													<p className="cut_tag lighthCColor text-decoration-line-through">
														$63.99
													</p>

													<div className="d-flex justify-content-between align-items-center">
														<div className="quantity_cont">
															<button className="border-0 bg-transparent">
																<AiOutlineMinus />
															</button>
															<input
																className="border-0 mx-3 text-center"
																type="number"
																name=""
																id=""
																value="0"
															/>
															<button className="border-0 bg-transparent">
																<AiOutlinePlus />
															</button>
														</div>
														<div className="w-100">
															<button className="w-100 aocBtn border-0 middleBlueC py-2 rounded-3 fw-bold">
																Add to cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hampers;
