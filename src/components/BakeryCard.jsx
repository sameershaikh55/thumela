import React, { useState } from "react";

// IMPORTS
import product from "../assets/product.svg";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const BakeryCard = () => {
	const [changeInp, setChangeInp] = useState(0);

	const increase = () => {
		if (changeInp < 99) {
			setChangeInp(changeInp + 1);
		}
	};

	const decrease = () => {
		if (changeInp > 0) {
			setChangeInp(changeInp - 1);
		}
	};

	return (
		<div className="col-12 col-md-3 col-lg-2 mt-4">
			<div className="hamper_card bakeryCard d-flex flex-row flex-md-column justify-content-between justify-content-md-between rounded-3">
				<div className="d-flex align-items-center justify-content-center first text-center my-2">
					<img src={product} alt="" />
				</div>

				<div className="second px-3 py-3 innerBody">
					<div className="d-flex flex-row flex-md-column">
						<div>
							<div className="d-flex align-items-center mb-3">
								<span className="greenBgStar px-2">
									<AiFillStar className="me-1 dGreenC" />
									<span className="dGreenC fw-bold">On Special</span>
								</span>
							</div>
							<div className="row">
								<div className="col-11 col-md-12">
									<h6 className="h_name lighthCColor">
										Douwe Egberts Instant Coffee Pure Gold Medium Roast - 200g
										Jar
									</h6>
								</div>
							</div>
						</div>
						<div>
							<h5 className="fw-bold mb-0">$45.99</h5>
							<p className="cut_tag lighthCColor text-decoration-line-through">
								$63.99
							</p>
						</div>
					</div>

					<div className="d-flex flex-row flex-md-column justify-content-between align-items-center mt-3 mt-md-0">
						<div className="quantity_cont d-flex">
							<button onClick={decrease} className="border-0 bg-transparent">
								<AiOutlineMinus />
							</button>
							<input
								readOnly
								className="border-0 mx-3 text-center"
								type="number"
								name=""
								max="99"
								min="0"
								id=""
								value={changeInp}
								onChange={(e) => setChangeInp(e.target.value)}
							/>
							<button onClick={increase} className="border-0 bg-transparent">
								<AiOutlinePlus />
							</button>
						</div>
						<div className="w-100 ms-3 ms-md-0 mt-0 mt-md-3">
							<button className="w-100 aocBtn border-0 middleBlueC py-2 rounded-3 fw-bold">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BakeryCard;
