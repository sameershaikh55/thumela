import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import Recommend from "../components/Recommended";
import SearchResultsC from "../components/SearchResults";
import SearchHeader from "../components/SearchHeader";

const SearchResults = () => {
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
						<SearchHeader />
						<SearchResultsC products />
						<SearchResultsC />
						<Recommend frequently />
						<CTA />
						<Footer />
					</>
				)}
			</div>
		</>
	);
};

export default SearchResults;
