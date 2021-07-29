import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import product from "../assets/product.svg";

const Cart = () => {
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
		<div className="row cart">
			<div className="col-3 text-center">
				<img className="product" src={product} alt="" />
			</div>
			<div className="col-9 ps-0">
				<div className="d-flex w-100 justify-content-between">
					<p>Douwe Egberts Instant Coffee Pure Gold Medium Roast - 200g Jar</p>
					<h6 className="ms-4 fw600">R1000.00</h6>
				</div>
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
					<div>
						<RiDeleteBin6Line fontSize="1.4rem" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
