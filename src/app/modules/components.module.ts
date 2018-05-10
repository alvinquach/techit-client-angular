import { NgModule } from "@angular/core";
import { CommonsModule } from "./commons.module";
import { LoginComponent } from "../components/login/login.component";
import { NavigationComponent } from "../components/navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "../components/user-profile/user-profile.component";
import { TicketsListComponent } from "../components/tickets-list/tickets-list.component";

@NgModule({
	imports: [
        RouterModule,
        CommonsModule
    ],
    declarations: [
        LoginComponent,
        NavigationComponent,
        UserProfileComponent,
        TicketsListComponent
    ]
})
export class ComponentsModule {}