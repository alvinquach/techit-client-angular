import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { TitleService } from "../../services/title.service";

@Component({
	selector: 'app-tickets-list',
	templateUrl: './tickets-list.component.html',
	// styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {

    constructor(
		private _authService: AuthService,
		private _titleService: TitleService,
		// private _userDataService: UserDataService
	) {}

	ngOnInit() {
		this._titleService.setTitle("My Tickets");
	}

}