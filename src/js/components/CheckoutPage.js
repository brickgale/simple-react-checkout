import React from "react";
import { Links } from "react-router";

import Header from "./Header";
import UserDetailsForm from "./UserDetailsForm";
import DetailedCart from "./DetailedCart";

export default class CheckoutPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div class="main-container checkout-container">
					<div class="c-container cart-container">
						<h3 class="c-title">
							Granska din kundvagn (Måste hämtas i butik)
						</h3>
						<p>
							Din kundvagn innehåller antingen reservdelar eller produkter som vi klassar som farliga,skrymmande eller ömtåliga. Din beställning måste därför hämtas ut i någon av våra butiker.
						</p>
						<DetailedCart />
					</div>
					<div class="c-container s-delivery">
						<h3 class="c-title">
							Hur vill du ha din order levererad?
						</h3>
						<label class="disable"><input type="radio" name="i-delivery" disabled="" />Hämta på Postens utlämningsställer (49kr)</label><br/>
						<label class="disable"><input type="radio" name="i-delivery" disabled="" />Hem till dörren (249kr)</label><br/>
						<label class="disable"><input type="radio" name="i-delivery" disabled="" />Hämta i butik (49kr)</label><br/>
						<label class="disable"><input type="radio" name="i-delivery" disabled="" />Företagspaket (100kr)</label><br/>
						<p class="align-label">Beräknad leveranstid: <b>1-3 dagar</b></p>
					</div>
					<div class="c-container s-payment-method">
						<h3 class="c-title">
							Hur vill du betala?
						</h3>
						<label class="disable"><input type="radio" name="i-payment-method" disabled="" />Faktura (29kr)</label><br/>
						<label class="disable"><input type="radio" name="i-payment-method" disabled="" />Klarna konto (0 kr)</label><br/>
						<label class="disable"><input type="radio" name="i-payment-method" disabled="" />Visa eller MasterCard (0kr)</label><br/>
						<label class="disable"><input type="radio" name="i-payment-method" disabled="" />Via bank (0kr)</label><br/>
					</div>
					<div class="c-container s-user-details">
						<h3 class="c-title">
							Ange dina uppgifter
						</h3>
						<div class="inline-radio">
							<label><input type="radio" name="i-user-details" />Privatperson/Enskild firma</label>
							<label><input type="radio" name="i-user-details" />Företag</label>
						</div>

						<UserDetailsForm />
					</div>

					<p class="checkout-confirm text-center"><label><input id="c-confirm" type="checkbox" />Jag accepterar CarService Corp's <a href="#">köpvilkor</a></label></p>
					<div class="text-center">
						<a class="btn btn-large btn-success btn-confirm-checkout">Skicka beställning</a>
					</div>
				</div>
			</div>
		);
	}
}
