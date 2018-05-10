import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Routes } from "@angular/router";

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    currentUserName: string;

    private _routerLinks: RouterLink[] = [
        {
            path: '/profile',
            title: 'My Profile',
            icon: 'person'
        },
        {
            path: '/tickets',
            title: 'My Tickets',
            icon: 'dashboard'
        }
    ];

    get routerLinks(): RouterLink[] {
        return this._routerLinks;
    }

    constructor(private _authService: AuthService) {}

    ngOnInit() {
        this.currentUserName = this._authService.getUsername();
    }
    
    logout() {
        this._authService.logout();
    }

}

interface RouterLink {
    path: string;
    title: string;
    icon?: string;
}