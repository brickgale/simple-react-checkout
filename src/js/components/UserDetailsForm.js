import React from "react";
import { Links } from "react-router";

export default class UserDetailsForm extends React.Component {
	render() {
		return (
			<form name="f-user-details">
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Personnummer</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
					<div class="col-sm-3">
						<a class="btn btn-default btn-address" href="#">Hämta min adress</a>
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">c/o</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Förnamn*</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Efternamn*</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Gatuadress*</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Postadress*</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Mobiltelefonnummer*</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Epost*</label>
					<div class="col-sm-4">
						<input type="email" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 control-label">Bekräfta epost*</label>
					<div class="col-sm-4">
						<input type="email" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div><label><input type="checkbox" />Ja tack, jag vill ha nyhetsbrev från CarService Corp</label></div>
				<div><i>* Obligatoriska fält</i></div>
			</form>
		);
	}
}

