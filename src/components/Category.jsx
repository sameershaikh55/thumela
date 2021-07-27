import React from "react";

const Category = () => {
	return (
		<div className="category_container mt-5 mt-md-4">
			<div className="page_container">
				<div className="container-fluid">
					<h1 className="text-center fw600 middleBlueC mb-3">
						Shop by Category
					</h1>

					<div className="row">
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((p, i) => {
							return (
								<div className="col-3 text-center mt-4">
									<div className="bg-white rounded-3 py-3 shadow-sm">
										Toiletries & Beauty
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
