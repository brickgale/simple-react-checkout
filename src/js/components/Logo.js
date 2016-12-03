import React from "react";
import { Links } from "react-router";

export default class Logo extends React.Component {
	render() {

		const logo_url = "http://placehold.it/40x60&amp;text=C";
		const logo_url_2 = "http://placehold.it/220x60&amp;text=CarService Corp";

		return (
			<div>
				<a href="" class="logo-icon simple">
					<img src={logo_url} />
				</a>
				<h1 class="logo">
					<a href="">
						<img src={logo_url_2} />
					</a>
				</h1>
			</div>
		);
	}
}

