import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignIn = () => {
	return (
		<div className="sign_in_container">
			<div className="signIn_container d-flex justify-content-center align-items-center">
				<SignUpForm />
			</div>
			<div className="signIn_right d-none d-md-block"></div>
		</div>
	);
};

export default SignIn;
