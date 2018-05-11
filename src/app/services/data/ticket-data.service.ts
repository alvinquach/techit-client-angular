import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Ticket } from "../../models/ticket.model";
import { User } from "../../models/user.model";
import { Update } from "../../models/update.model";

@Injectable()
export class TicketDataService {

    private _apiPath: string = '/tickets';

    constructor(private _http: HttpClient) {}

    getTicket(ticketId: string): Observable<Ticket> {
        return this._http.get<Ticket>(`${environment.serverUrl}${this._apiPath}/${ticketId}`);
    }

    createTicket(ticket: Ticket): Observable<Ticket> {
        return this._http.post<Ticket>(`${environment.serverUrl}${this._apiPath}`, ticket);
    }

    getTicketTechnicians(ticketId: string): Observable<User[]> {
        return this._http.get<User[]>(`${environment.serverUrl}${this._apiPath}/${ticketId}/technicians`);
    }

    setTicketStatus(ticketId: string, status: string): Observable<Ticket> {
        return this._http.put<Ticket>(`${environment.serverUrl}${this._apiPath}/${ticketId}/status/${status}`, {});
    }

    setTicketPriority(ticketId: string, priority: string): Observable<Ticket> {
        return this._http.put<Ticket>(`${environment.serverUrl}${this._apiPath}/${ticketId}/priority/${priority}`, {});
    }

    addTicketUpdate(ticketId: string, update: Update): Observable<Ticket> {
        return this._http.post<Ticket>(`${environment.serverUrl}${this._apiPath}/${ticketId}/update`, update);
    }

}