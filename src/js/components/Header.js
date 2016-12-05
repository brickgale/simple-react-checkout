import React from "react";
import { Links } from "react-router";

import Logo from "./Logo";
import Search from "./Search";

export default class Header extends React.Component {
	render() {
		return (
			<nav class="topmenu fixed">
				<Logo />
				<div class="nav-con">
					<Search />
				</div>
			</nav>
		);
	}
}

