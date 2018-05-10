import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { User } from "../../models/user.model";


@Injectable()
export class UserDataService {
    
    private _apiPath: string = '/users';

    constructor(private _http: HttpClient) {}

    getUser(userId: string): Observable<User> {
        return this._http.get<User>(`${environment.serverUrl}${this._apiPath}/${userId}`);
    }

}