import React from "react";
import { Links } from "react-router";

import Logo from "./Logo";
import Search from "./Search";

export default class Header extends React.Component {
	render() {
		return (
			<nav class="topmenu fixed">
				<Logo />
				<div class="nav-con col-xs-10 col-md-8">
					<Search />
				</div>
				<div class="checkout-btn col-xs-2 col-md-4">
					<a class="btn btn-success pull-right checkout" href="#">
						<i class="icon-shopping-cart"></i>
						<span>
							Till kassan
						</span>
					</a>
				</div>
			</nav>
		);
	}
}

