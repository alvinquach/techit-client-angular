import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { TitleService } from "../../services/title.service";
import { UserDataService } from "../../services/data/user-data.service";
import { Ticket } from "../../models/ticket.model";
import { Router } from "@angular/router";

@Component({
	selector: 'app-tickets-list',
	templateUrl: './tickets-list.component.html',
	styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {

	private readonly _displayedColumns: string[] = [
		'subject',
		'updated',
		'priority',
		'status',
		'action'
	];

	get displayedColumns(): string[] {
		return this._displayedColumns;
	}

	private _tickets: Ticket[];

	get tickets(): Ticket[] {
		return this._tickets;
	}

    constructor(
		private _authService: AuthService,
		private _router: Router,
		private _titleService: TitleService,
		private _userDataService: UserDataService
	) {}

	ngOnInit() {
		this._titleService.setTitle("Tickets");
		this._userDataService.getTicketsByUser(this._authService.getUserId()).subscribe(
			(res: Ticket[]) => {
				this._tickets = res;
			}
		);
	}

	viewTicket(ticketId: string): void {
		this._router.navigate(['tickets', ticketId]);
	}
	
	createTicket(): void {
		this._router.navigate(['tickets', 'new']);
	}

}