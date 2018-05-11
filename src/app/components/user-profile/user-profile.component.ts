import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { User } from "../../models/user.model";
import { UserDataService } from "../../services/data/user-data.service";
import { TitleService } from "../../services/title.service";

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

	private _userData: User;

	get userData(): User {
		return this._userData;
	}

    constructor(
		private _authService: AuthService,
		private _titleService: TitleService,
		private _userDataService: UserDataService
	) {}

	ngOnInit() {
		this._titleService.setTitle("Profile");
		this._userDataService.getUser(this._authService.getUserId()).subscribe(
			(res: User) => {
				this._userData = res;
			}
		);
	}

}