import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hampers from "../components/Hampers";
import Feature from "../components/Feature";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import Bakery from "../components/Bakery";
import Recommend from "../components/Recommended";

const Landing = () => {
	const { isOpen, OnClick } = useHooks();
	const [sidebar, setSidebar] = useState(false);

	return (
		<>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<div className={`${isOpen && "sidebarActive"}`}>
				<Header
					sidebar={sidebar}
					setSidebar={setSidebar}
					ClickEvent={OnClick}
				/>
				{!sidebar && (
					<>
						<Hero />
						<Hampers />
						<Feature />
						<Bakery />
						<Recommend />
						<CTA />
						<Footer />
					</>
				)}
			</div>
		</>
	);
};

export default Landing;
