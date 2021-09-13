import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BsEyeFill } from "react-icons/bs";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
	return (
		<div className="inner_signIn py-5">
			<div className="container-fluid px-4">
				<div className="row">
					<img src={logo} alt="" />
					<h3 className="mt-4 mb-4 fw-bold f28">
						<span className="bottomLine pb-1">Sig</span>n in
					</h3>
					<p className="d-flex flex-column flex-sm-row f14 fw500 mb-0">
						Don’t have an account?{"  "}&nbsp;
						<Link className="blueC" to="">
							Create your account here
						</Link>
					</p>

					<div className="col-12 mt-4">
						<label className="f14 fw600" htmlFor="Email address">
							Email address
						</label>
						<br />
						<input
							className="w-100"
							type="email"
							placeholder="email@example.com"
						/>
					</div>
					<div className="inp_password col-12 mt-4">
						<label className="f14 fw600" htmlFor="Password">
							Password
						</label>
						<br />
						<input className="w-100" type="email" placeholder="Password" />
						<BsEyeFill className="eye_cont position-absolute" />
					</div>
					<div className="col-12 d-flex align-items-center justify-content-between mt-4">
						<div className="d-flex f14 align-items-center">
							<input type="checkbox" className="me-2" />
							<span className="lighthCColor">Remember me</span>
						</div>
						<Link className="blueC f14" to="">
							Forgot your password?
						</Link>
					</div>
					<div className="mt-3">
						<button className="btnBg border-0 py-2 w-100 rounded-3 text-white">
							Sign in to your account
						</button>
					</div>
					<div className="my-4">
						<hr />
					</div>
					<div>
						<p className="lighthCColor">You can also signin with...</p>
						<div className="d-flex justify-content-between">
							<div className="share_icon text-center py-2 me-3 f14">
								Facebook <AiFillFacebook color="#2372FD" fontSize="1.2rem" />
							</div>
							<div className="share_icon text-center py-2 me-3 f14">
								Google <FcGoogle fontSize="1.2rem" />
							</div>
							<div className="share_icon d-flex align-items-center justify-content-center fw-bold text-center py-2 f14">
								Apple ID <AiFillApple color="#000000" fontSize="1.3rem" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
