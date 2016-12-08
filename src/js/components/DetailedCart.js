import React from "react";
import { Links } from "react-router";
import Request from 'superagent';

export default class DetailedCart extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	componentWillMount() {
		var getCartUrl = "http://localhost:8181/cart";
		Request.get(getCartUrl).then((response) => {
			console.log(response);
			this.setState({
				cart: response.body
			});
		});
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

