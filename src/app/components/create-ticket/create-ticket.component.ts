import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Ticket } from "../../models/ticket.model";
import { TicketDataService } from "../../services/data/ticket-data.service";
import { TitleService } from "../../services/title.service";

@Component({
	selector: 'app-create-ticket',
	templateUrl: './create-ticket.component.html',
	styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

    private readonly _ticket: Ticket = {
        details: "",
        location: "",
        priority: "",
        status: "",
        subject: "",
        unit: null,
        technicians: [],
        updates: [],
    };

    get ticket(): Ticket {
        return this._ticket;
    }

    constructor(
        private _activatedRoute: ActivatedRoute,
		private _titleService: TitleService,
        private _ticketDataService: TicketDataService,
    ) {}

    ngOnInit() {
		this._titleService.setTitle("Create Ticket");
    }

}