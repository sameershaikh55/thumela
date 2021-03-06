import React from "react";

// IMPORTS
// import { hero } from "../assets/image.js";
import productHero from "../assets/productHero.svg";
import heroCricle from "../assets/heroCricle.svg";
import heroM from "../assets/heroM.svg";

const Hero = () => {
	return (
		<div className="hero_section mt-5 mt-md-4">
			<div className="bg_circle d-none d-md-block">
				<img src={heroCricle} alt="heroCricle" />
			</div>
			<div className="bg_circle d-block d-md-none">
				<img src={heroM} alt="heroCricle" />
			</div>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-12 col-md-6 pe-md-0 text-center text-md-start">
							<h1 className="middleBlueC">
								All shopping items items come here
							</h1>
							<p className="grayC mb-4">Say something catchy here</p>
						</div>
						<div className="col-12 col-md-6 ps-md-0">
							<img src={productHero} alt="hero" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
