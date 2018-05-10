import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Routes } from "@angular/router";
import { TitleService } from "../../services/title.service";
import { Subscription } from "rxjs";

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

    currentUserUsername: string;
    currentUserName: string;
    currentUserEmail: string;

    title: string;

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

    private _onTitleChangeSubscription: Subscription;

    constructor(
        private _authService: AuthService,
        private _titleService: TitleService
    ) {}

    ngOnInit() {
        this.currentUserUsername = this._authService.getUsername();
        this.currentUserName = this._authService.getName();
        this.currentUserEmail = this._authService.getEmail();
        this._onTitleChangeSubscription = this._titleService.onTitleChange
            .subscribe((newTitle) => {this.title = newTitle;});
    }

    ngOnDestroy() {
        this._onTitleChangeSubscription.unsubscribe();
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