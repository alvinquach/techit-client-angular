import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	// styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	displayError: boolean = false;

	constructor(private _authService: AuthService) {}

	login(username: string, password: string) {
		this.displayError = false;
		this._authService.login(
			username,
			password,
			() => {
				if (this._authService.isLoggedIn()) console.log("LOGGED IN");

				// TODO Redirect user to dashboard.
			},
			(err) => {
				console.log(err);
				this.displayError = true;
			}
		);
	}

}