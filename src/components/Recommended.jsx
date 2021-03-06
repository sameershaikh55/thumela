import React from "react";

// IMPORTS
import Slider from "react-slick";
import FeatureCard from "./FeatureCard";

const Recommend = ({ frequently }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		arrows: true,
		responsive: [
			{
				breakpoint: 998,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					arrows: false,
				},
			},
		],
	};
	return (
		<>
			<div className="feature_containerMain">
				<div className="page_container">
					<div className="container-fluid">
						<div className="d-flex justify-content-between">
							{(!frequently && (
								<h4 className="middleBlueC fw-bold">
									<span className="bottomLine pb-1">Reco</span>
									mmended for you
								</h4>
							)) || (
								<h4 className="middleBlueC fw-bold">
									<span className="bottomLine pb-1">Freq</span>
									uently Bought Hamper
								</h4>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="feature_container recommend">
				<div className="container-fluid">
					<div className="row mt-4">
						<div className="col-12 px-0 px-md-3">
							<Slider {...settings}>
								{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((p, i) => {
									return (
										<div key={i} className="col-3">
											<FeatureCard i={i} />
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Recommend;
