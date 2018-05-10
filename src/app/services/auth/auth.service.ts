import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export const localStorageJwtKey: string = 'key';

@Injectable()
export class AuthService {

    private _jwtHelper: JwtHelperService = new JwtHelperService();

    /** Cached copy of user info parsed from JWT. */
    private _currentUser: UserInfo;

    constructor(private _http: HttpClient, private _router: Router) {}

    /** Retrieves JWT from local storage. */
    private _getToken(): string {
        return localStorage.getItem(localStorageJwtKey);
    }

    /** Parses and caches user info from JWT. */
    private _parseJWT(jwt: string): UserInfo {
        if (jwt) {
            if (!jwt.startsWith("Bearer ")) {
                jwt = `Bearer ${jwt}`;
            }
            this._currentUser = this._jwtHelper.decodeToken(jwt);
            console.log("JWT Parsed:", this._currentUser)
        }
        return this._currentUser;
    }

    /** Check whether the client is logged in. */
    isLoggedIn(): boolean {
        if (!this._currentUser) {
            const jwt: string = this._getToken();
            if (jwt) {
                this._parseJWT(jwt);
            }
        }
        return !!this._currentUser;
    }

    /** Get the current user's position. */
    getUserPosition(): string {
        if (!this._currentUser) {
            const jwt: string = this._getToken();
            if (!jwt) {
                return null;
            }
            this._parseJWT(jwt);
        }
        return this._currentUser && this._currentUser.position;
    }

    /** Get the current user's username. */
    getUsername(): string {
        if (!this._currentUser) {
            const jwt: string = this._getToken();
            if (!jwt) {
                return null;
            }
            this._parseJWT(jwt);
        }
        return this._currentUser && this._currentUser.username;
    }

    /** Get the current user's full name. */
    getName(): string {
        if (!this._currentUser) {
            const jwt: string = this._getToken();
            if (!jwt) {
                return null;
            }
            this._parseJWT(jwt);
        }
        return this._currentUser && this._currentUser.name;
    }

    /** Get the current user's email. */
    getEmail(): string {
        if (!this._currentUser) {
            const jwt: string = this._getToken();
            if (!jwt) {
                return null;
            }
            this._parseJWT(jwt);
        }
        return this._currentUser && this._currentUser.email;
    }

    /** Get the current user's ID. */
    getUserId(): string {
        if (!this._currentUser) {
            const jwt: string = this._getToken();
            if (!jwt) {
                return null;
            }
            this._parseJWT(jwt);
        }
        return this._currentUser && this._currentUser.id;
    }

    login(username: string, password: string, callback?: () => void, errCallback?: (err) => void): void {
        const params = {
            username: username,
            password: password
        };
        this._http.post(`${environment.serverUrl}/login`, {}, { params: params, responseType: 'text' }).subscribe(
            (res) => {

                // Store the JWT in local storage.
                localStorage.setItem(localStorageJwtKey, res.substring(7));
                this._parseJWT(res);

                callback && callback();
            },
            (err) => {
                errCallback ? errCallback(err) : console.log(err);
            }
        )
    }

    logout() {
        this._currentUser = null;
        localStorage.removeItem(localStorageJwtKey);
        this._router.navigate(['login']);
    }

}

interface UserInfo {
    id: string,
    username: string,
    name: string,
    email: string,
    position: string,
    unitId: string
}

