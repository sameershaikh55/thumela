import React from "react";

const OrderedItem = () => {
	return (
		<div className="order_summary_container ordered_items pt-5 pb-5 px-3">
			<h3 className="fw-bold">
				<span className="bottomLine">Ord</span>ered items
			</h3>
			<hr className="hrBg mt-4 mb-3" />

			{[1, 1, 1, 1].map((prev, i) => {
				return (
					<div key={i} className="w-100 mb-3">
						<div className="d-flex justify-content-between align-items-start">
							<div>
								<p className="mb-0 f14 fw-bold">12 Items</p>
								<p className="mb-0 f14 lightestGray fw500">
									John Doe <br />
									+263 56 678 7654 <br />
									14 Nertherby Drive, <br className="d-block d-md-none" />{" "}
									Paddonhurst, Bulawayo
								</p>
							</div>
							<div className="d-flex flex-column justify-content-end align-items-end">
								<p className="mb-2 fw-bold f14">R1000.00</p>
								<p className="mb-2 f12 blueC fw600">Show Order Details</p>
								<button className="btnBg2 f12 fw-bold border-0 py-1">
									Track
								</button>
							</div>
						</div>

						{i !== 3 && <hr className="hrBg mt-3 mb-4 mb-2" />}
					</div>
				);
			})}
		</div>
	);
};

export default OrderedItem;
