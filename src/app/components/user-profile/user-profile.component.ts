import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { User } from "../../models/user.model";
import { UserDataService } from "../../services/data/user-data.service";
import { TitleService } from "../../services/title.service";
import { MatDialog, MatDialogRef } from "@angular/material";
import { OkPromptComponent } from "../prompts/ok-prompt/ok-prompt.component";

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
		private _userDataService: UserDataService,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this._titleService.setTitle("Profile");
		this._userDataService.getUser(this._authService.getUserId()).subscribe(
			(res: User) => {
				this._userData = res;
			}
		);
	}

	editProfile(): void {
		const dialogRef: MatDialogRef<OkPromptComponent> = this.dialog.open(OkPromptComponent, {
			width: '480px',
			data: {
				title: 'Coming Soon!',
				text: `The edit profile feature is not available yet.\n\nIt says 'coming soon' above, but in reality this feature will probably never be implemented since it wasn't required for this assignment.`
			}
		});
	}

}