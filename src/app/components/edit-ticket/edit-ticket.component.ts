import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Ticket } from "../../models/ticket.model";
import { TicketDataService } from "../../services/data/ticket-data.service";
import { TitleService } from "../../services/title.service";

@Component({
	selector: 'app-edit-ticket',
	templateUrl: './edit-ticket.component.html',
	styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

    private _ticket: Ticket;

    get ticket(): Ticket {
        return this._ticket;
    }

    constructor(
        private _activatedRoute: ActivatedRoute,
		private _titleService: TitleService,
        private _ticketDataService: TicketDataService,
    ) {}

    ngOnInit() {
		this._titleService.setTitle("View Ticket");
        this._activatedRoute.params.subscribe(route => {
            const ticketId = route.ticketId;
            if (ticketId) {
                this._ticketDataService.getTicket(ticketId).subscribe(
                    (res) => {
                        this._ticket = res;
                        console.log(this._ticket);
                    }
                );
            }
        })
    }

}