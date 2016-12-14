import React from "react";
import { Links } from "react-router";
import Request from 'request';
import SockJS from 'sockjs-client';

export default class DetailedCart extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	componentWillMount() {

		var sock = new SockJS('http://localhost:8080/sockjs-node');
		sock.onmessage = function(e) {
			console.log(e);
		};

		let s_url = '';

		//intialize products
		const endpoint_url = "http://localhost:8181/";
		const product_ids = ["22565423428", "22565423394"];

		for(var product_id of product_ids) {
			s_url = endpoint_url+'cart/'+product_id;
			Request({
				method: 'POST',
				uri: s_url, 
				headers: [{
					name: 'content-type',
					value: 'application/x-www-form-urlencoded',
				},{
					name: 'set-cookie',
					value: 'cart_id=3',
				}],
			});
		}

		s_url = endpoint_url+'cart/';
		Request({
			method: 'GET',
			uri: s_url, 
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

