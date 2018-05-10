import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	// styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

    constructor(private _authService: AuthService) {}

}