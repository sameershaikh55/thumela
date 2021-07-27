import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Hampers from "../components/Hampers";
import Feature from "../components/Feature";
import Shop from "../components/Shop";
import Customer from "../components/Customer";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Landing = () => {
	return (
		<>
			<Header />
			<Hero />
			<Category />
			<Hampers />
			<Feature />
			<Shop />
			<Customer />
			<CTA />
			<Footer />
		</>
	);
};

export default Landing;
