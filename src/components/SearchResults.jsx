import React from "react";

// IMPORTS
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import HampersCard from "./HampersCard";
import HampersCardM from "./HampersCardM";

const SearchResultsC = ({ products }) => {
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
						{(products && (
							<h4 className="middleBlueC fw-bold">
								<span className="bottomLine pb-1">Pro</span>
								ducts
							</h4>
						)) || (
							<h4 className="middleBlueC fw-bold">
								<span className="bottomLine pb-1">Ham</span>
								per Containing "EST"
							</h4>
						)}
						{/* <NavLink className="blueC" to="">
							View all
						</NavLink> */}
					</div>

					<div className="row d-none d-md-flex mt-4">
						{[1, 1, 1, 1].map(() => {
							return <HampersCard results />;
						})}
					</div>

					<div className="row d-flex d-md-none mt-4">
						<div className="col-12 px-0">
							<Slider {...settings}>
								{[1, 1, 1, 1].map(() => {
									return (
										<div className="col-3">
											<HampersCardM />
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

export default SearchResultsC;
