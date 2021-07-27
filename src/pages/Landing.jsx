import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Hampers from "../components/Hampers";
import Feature from "../components/Feature";

const Landing = () => {
	return (
		<>
			<Header />
			<Hero />
			<Category />
			<Hampers />
			<Feature />
		</>
	);
};

export default Landing;
