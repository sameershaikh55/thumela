import React from "react";

// IMPORTS
import s1 from "../assets/shops/s1.svg";
import s2 from "../assets/shops/s2.svg";
import s3 from "../assets/shops/s3.svg";
import s4 from "../assets/shops/s4.svg";
import s5 from "../assets/shops/s5.svg";
import s6 from "../assets/shops/s6.svg";

const Shop = () => {
	const data = [
		{
			i: s1,
			t: (
				<h4 className="middleBlueC fw-bold">
					Shop in a secure checkout process
				</h4>
			),
			d: "A daily dataset to keep you up to date on subscription marke",
		},
		{
			i: s2,
			t: (
				<h4 className="middleBlueC fw-bold">
					Shop on <br className="d-none d-lg-block" /> the move
				</h4>
			),
			d: "Shop on the move with our apps for tablet and mobile",
		},
		{
			i: s3,
			t: (
				<h4 className="middleBlueC fw-bold">
					Our support team <br className="d-none d-lg-block" /> is ready to
					assist
				</h4>
			),
			d: "Great quality products picked and packed with care",
		},
		{
			i: s4,
			t: (
				<h4 className="middleBlueC fw-bold">
					Delivery or <br className="d-none d-lg-block" /> collection
				</h4>
			),
			d: "7 days a week, at a time that suits you",
		},
		{
			i: s5,
			t: (
				<h4 className="middleBlueC fw-bold">
					Stay informed <br className="d-none d-lg-block" /> with our tracking
				</h4>
			),
			d: "We make it clear whether any action is needed and we help you get your order in the fastest time to your doorstep",
		},
		{
			i: s6,
			t: (
				<h4 className="middleBlueC fw-bold">
					Goods are <br className="d-none d-lg-block" /> handled with care
				</h4>
			),
			d: "Great quality products picked and packed with care",
		},
	];

	return (
		<div className="bg-white">
			<div className="shop_container">
				<div className="page_container">
					<div className="container-fluid">
						<h1 className="text-center middleBlueC fw-bold">
							Why shop with us?
						</h1>

						<div className="row mt-5">
							{data.map((p, ind) => {
								const { i, t, d } = p;
								return (
									<div key={ind} className="col-6 col-md-4 shop_card mt-4">
										<img src={i} alt="" />
										<div className="desc_cont">
											{t}
											<p className="grayC mt-2 mt-md-3">{d}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
