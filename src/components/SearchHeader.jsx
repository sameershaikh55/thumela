import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const SearchHeader = () => {
	return (
		<div className="page_container search_container mt-5">
			<div className="container-fluid">
				<div className="row">
					<h1 className="fw-bold middleBlueC">
						<span className="bottomLine">Sear</span>ch Results
					</h1>

					<div className="mt-4 d-flex flex-column flex-md-row justify-content-between">
						<h5 className="w-100">2 Results found for the search for "EST"</h5>
						<div className="d-flex flex-column flex-md-row justify-content-end w-100 mt-2 mt-md-0">
							<div className="d-flex flex-column flex-md-row align-items-md-center">
								<label className="me-2 mb-0" for="cars">
									Sort By
								</label>
								<select className="form-control mt-0" name="cars" id="cars">
									<option value="Price">Price</option>
									<option value="Price">Price</option>
									<option value="Price">Price</option>
								</select>
							</div>
							<div className="pagination_container d-flex justify-content-center mt-4 mt-md-0">
								<Pagination count={10} shape="rounded" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchHeader;
