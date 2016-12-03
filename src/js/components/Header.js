import React from "react";
import { Links } from "react-router";

import Logo from "./Logo";

export default class Header extends React.Component {
	render() {
		return (
			<nav class="topmenu fixed">
				<Logo />
			</nav>
		);
	}
}

