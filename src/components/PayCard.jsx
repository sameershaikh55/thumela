import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import f1 from "../assets/uFooter/i1.svg";

const PayCard = () => {
	const [check, setCheck] = useState(false);

	return (
		<div
			style={{
				background: (check && "rgba(224, 239, 255, 0.25)") || "#fff",
			}}
			className="payment_cont my-4 d-flex justify-content-between px-3 py-3  "
		>
			<div>
				<h5 className="lighthCColor f14 fw600">
					<img src={f1} alt="" /> Visa Card
				</h5>
				<p className="lightestGray f14 mb-0">Visa **** 5432</p>
				<p className="lightestGray f14">Expires 04/23</p>
				<div className="mt-4">
					<label class="container_radio d-flex align-items-center mb-0 f14">
						Pay using this card
						<input
							type="checkbox"
							checked={check}
							onChange={() => setCheck(!check)}
						/>
						<span class="checkmark"></span>
					</label>
				</div>
			</div>
			<div>
				<RiDeleteBin6Line fontSize="1.1rem" />
			</div>
		</div>
	);
};

export default PayCard;
