import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				right: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="logo">
				<NavLink to="/">
					<img src={logo} alt="logo" />
				</NavLink>
			</div>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul>
				<li>
					<NavLink
						exact
						to="/"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Help Center
					</NavLink>
				</li>
				<li className="loginBtn rounded-3 mt-3 py-1 w-100 text-center">
					<NavLink
						exact
						to="/s"
						activeClassName="activeNav"
						className="text-white"
						onClick={ClickEvent}
					>
						Login
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
