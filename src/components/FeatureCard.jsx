import React, { useState } from "react";

// imports
import product from "../assets/product.svg";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

const FeatureCard = ({ i }) => {
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
		<div className="hamper_card rounded-3">
			<div className="d-flex justify-content-center my-2">
				<img src={product} alt="" />
			</div>

			<div className="card_body px-3 py-3">
				<div className="d-flex align-items-center mb-3">
					<span className="greenBgStar px-2">
						<AiFillStar className="me-1 dGreenC" />
						<span className="dGreenC fw-bold">On Special</span>
					</span>
				</div>
				<h6 className="h_name lighthCColor">
					Douwe Egberts Instant Coffee Pure Gold Medium Roast - 200g Jar
				</h6>
				<h5 className="fw-bold mb-0">$45.99</h5>
				<p className="cut_tag lighthCColor text-decoration-line-through">
					$63.99
				</p>

				<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
					<div className="quantity_cont w-100">
						<button onClick={decrease} className="border-0 bg-transparent">
							<AiOutlineMinus />
						</button>
						<input
							className="border-0 mx-3 text-center"
							type="number"
							name=""
							id=""
							value={changeInp}
							onChange={(e) => setChangeInp(e.target.value)}
						/>
						<button onClick={increase} className="border-0 bg-transparent">
							<AiOutlinePlus />
						</button>
					</div>
					<div className="w-100 mt-2 mt-sm-0">
						{(i === 0 && (
							<button className="w-100 aocBtn btnFilled border-0 middleBlueC rounded-3 fw-bold d-flex justify-content-center align-items-center">
								<BsCheck className="me-1" fontSize="1.2rem" /> Added
							</button>
						)) || (
							<button className="w-100 aocBtn border-0 middleBlueC py-2 rounded-3 fw-bold">
								Add to cart
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
