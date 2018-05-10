import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { TitleService } from "../../services/title.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	displayError: boolean = false;

	constructor(
		private _authService: AuthService,
		private _router: Router,
		private _titleService: TitleService
	) {}

	ngOnInit() {
		this._titleService.setTitle("Login");
	}

	login(username: string, password: string) {
		this.displayError = false;
		this._authService.login(
			username,
			password,
			() => {
				this._router.navigate(['profile']);
			},
			(err) => {
				console.log(err);
				this.displayError = true;
			}
		);
	}

}