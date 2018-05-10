import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    currentUserName: string;

    constructor(private _authService: AuthService) {}

    ngOnInit() {
        this.currentUserName = this._authService.getUsername();
    }
    
    logout() {
        this._authService.logout();
    }

}