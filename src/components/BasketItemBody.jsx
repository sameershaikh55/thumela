import React, { useState } from "react";
import product from "../assets/product.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const BasketItemBody = ({ rec }) => {
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
		<div>
			<hr className="hrBg my-4" />
			<div className="mainDiv d-flex justify-content-between cart">
				<div className="first d-flex">
					<div style={{ border: rec && "none" }} className="img_container">
						<img className="product" src={product} alt="" />
					</div>
					<div className="d-flex flex-column justify-content-between h-100 ms-3">
						<p className={`mb-0 ${rec && "f14"}`}>
							Douwe Egberts Instant Coffee Pure Gold Medium Roast - 200g Jar
						</p>
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
					</div>
				</div>
				<div className="second ps-0 h-100">
					<div className="d-flex flex-column h-100 w-100 justify-content-between align-items-end">
						<h6 className={`fw600 mb-0 ${rec && "f12"}`}>R1000.00</h6>
						<div>
							<RiDeleteBin6Line fontSize="1.4rem" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasketItemBody;
