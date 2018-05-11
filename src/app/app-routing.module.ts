import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: NavigationComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: 'profile',
				component: UserProfileComponent
			},
			{
				path: 'tickets',
				component: TicketsListComponent
			},
			{
				path: 'tickets/new',
				component: CreateTicketComponent
			},
			{
				path: 'tickets/:ticketId',
				component: EditTicketComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
