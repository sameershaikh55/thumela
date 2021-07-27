import React from "react";

// IMPORTING SLIDER
import Slider from "react-slick";

const Category = () => {
	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 998,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<div className="category_container mt-5 mt-md-4">
			<div className="page_container">
				<div className="container-fluid">
					<h1 className="text-center fw600 middleBlueC mb-3">
						Shop by Category
					</h1>

					<div className="row">
						<div className="col-12">
							<Slider {...settings}>
								{[1, 1, 1].map((p, i) => {
									return (
										<div className="innerSlideCont text-center mt-1">
											{/* DESKTOP START */}
											<div className="row d-none d-md-flex">
												{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((p, i) => {
													return (
														<div key={i} className="col-3 mt-3">
															<h6 className="bg-white rounded-3 py-3">
																Toiletries & Beauty
															</h6>
														</div>
													);
												})}
											</div>
											{/* DESKTOP END */}

											{/* MOBILE START */}
											<div className="row d-flex d-md-none">
												{[1, 1, 1, 1, 1, 1].map((p, i) => {
													return (
														<div key={i} className="col-6 mt-3">
															<h6 className="bg-white rounded-3 py-3">
																Toiletries & Beauty
															</h6>
														</div>
													);
												})}
											</div>
											{/* MOBILE END */}
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

export default Category;
