import React from "react";
import { Links } from "react-router";

import Header from "./Header";

export default class CheckoutPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div class="main-container checkout-container">
					<div class="c-container cart-container">
						<h3 class="c-title">
							1. Granska din kundvagn (Måste hämtas i butik)
						</h3>
						<p>
							Din kundvagn innehåller antingen reservdelar eller produkter som vi klassar som farliga,skrymmande eller ömtåliga. Din beställning måste därför hämtas ut i någon av våra butiker.
						</p>
					</div>
					<div class="c-container">
					</div>
					<div class="c-container">
					</div>
					<div class="c-container">
					</div>
				</div>
			</div>
		);
	}
}
