import React from "react";
import { Links } from "react-router";
import Request from 'request';

export default class DetailedCart extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	componentWillMount() {
		var CookieJar = unirest.jar();
		CookieJar.add('cart_id=1', '/'); // Cookie string, pathname / url
		//intialize products
		const endpoint_url = "http://localhost:8181/";
		const product_ids = ["22565423428", "22565423394"];

		for(var product_id of product_ids) {
			Request.post(endpoint_url+'cart/'+product_id).cookie('cart_id=1');
		}

		Request.get(endpoint_url+'cart').cookie('cart_id=1');
	}

	render() {

		console.log(this.state.cart);
		var items = (this.state.cart, (item) => {
			console.log(item);
			return <li> </li>;
		});

		return (
			<div class="cart">
				{items}
			</div>
		);
	}
}

