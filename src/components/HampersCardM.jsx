import React, { useState } from "react";

import product from "../assets/product.svg";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const HampersCardM = () => {
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
		<div className="hamper_card pb-3 rounded-3">
			<div className="d-flex justify-content-center my-4">
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
					Douwe Egberts Instant Coffee Pure Gold Medium Roast - 200g Jar
				</h6>
				<h5 className="fw-bold mb-0">$45.99</h5>
				<p className="cut_tag lighthCColor text-decoration-line-through">
					$63.99
				</p>

				<div className="d-flex justify-content-between align-items-center">
					<div className="quantity_cont">
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
					<div className="w-100">
						<button className="w-100 aocBtn border-0 middleBlueC py-2 rounded-3 fw-bold">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HampersCardM;
