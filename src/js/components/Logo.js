import React from "react";
import { Links } from "react-router";

export default class Logo extends React.Component {
	render() {

		const logo_url = "http://placehold.it/40x60&amp;text=C";

		return (
			<div>
				<a href="" class="logo-icon simple">
					<img src={logo_url} />
				</a>
			</div>
		);
	}
}

