import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
require('./../css/app.scss');

import CheckoutPage from "./components/CheckoutPage";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={CheckoutPage}>
    </Route>
  </Router>,
app);