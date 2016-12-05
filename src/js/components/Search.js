import React from "react";
import { Links } from "react-router";

export default class Search extends React.Component {
	render() {
		return (
			<div class="search-input-con">
				<input type="text" placeholder="Hej, vad letar du efter?" class="search-query" id="searchbox" />
				<a class="btn" href="search.html">
					<i class="icon-search"></i>
				</a>
			</div>
		);
	}
}

