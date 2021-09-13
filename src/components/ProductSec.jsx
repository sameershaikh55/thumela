import React, { useState } from "react";
import ImageGalleryC from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import product from "../assets/product.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const GallerySec = () => {
	const images = [
		{
			original: product,
			thumbnail: product,
		},
		{
			original: product,
			thumbnail: product,
		},
		{
			original: product,
			thumbnail: product,
		},
	];

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
		<div className="productGallery_container py-3 px-0 px-md-1 mt-3 mt-md-0">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-4">
						<div className="imageGalleryContainer">
							<ImageGalleryC
								autoPlay={false}
								showIndex={false}
								showPlayButton={false}
								items={images}
								allowFullScreen={true}
							/>
						</div>
					</div>
					<div className="col-12 d-flex flex-column justify-content-between col-md-8 mt-5">
						<div>
							<h2 className="middleBlueC fw-bold">
								<span className="bottomLine">Delu</span>x Hamper
							</h2>
							<p className="f14 grayC">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Magnam, consectetur.
							</p>
						</div>

						<div className="row">
							{[1, 1, 1, 1, 1, 1, 1, 1].map((prev, i) => {
								return (
									<div className="col-6 inner_delux">
										<div className="row align-items-center">
											<div className="mt-3">
												<GoPrimitiveDot /> Lorem, ipsum.
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="mt-5">
							<h1>$100</h1>
						</div>

						<div className="d-flex align-items-center mt-4">
							<div className="quantity_cont bg-white rounded-3 py-2 px-3">
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

							<div className="ms-3">
								<button className="btnBg border-0 text-white px-4 py-2 rounded-3">
									Add Items to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GallerySec;
