import React from "react";
import BakeryCard from "./BakeryCard";

const Bakery = () => {
	return (
		<div className="bakery_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex flex-column flex-md-row justify-content-between">
						<h4 className="middleBlueC fw-bold order-1 order-md-0">
							<span className="bottomLine pb-1">Bak</span>
							ery
						</h4>
						<div className="mb-3 mb-md-0">
							<select name="cars" id="cars" className="px-2">
								<option value="Select a category">Select a category</option>
								<option value="Category item comes here">
									Category item comes here
								</option>
								<option value="Category item comes here">
									Category item comes here
								</option>
								<option value="Category item comes here">
									Category item comes here
								</option>
							</select>
						</div>
					</div>

					<div className="row">
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
							return <BakeryCard />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bakery;
