import { NgModule } from "@angular/core";
import { CommonsModule } from "./commons.module";
import { LoginComponent } from "../components/login/login.component";
import { NavigationComponent } from "../components/navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "../components/user-profile/user-profile.component";
import { TicketsListComponent } from "../components/tickets-list/tickets-list.component";
import { OkPromptComponent } from "../components/prompts/ok-prompt/ok-prompt.component";

@NgModule({
	imports: [
        RouterModule,
        CommonsModule
    ],
    entryComponents: [
        OkPromptComponent,
    ],
    declarations: [
        OkPromptComponent,
        LoginComponent,
        NavigationComponent,
        UserProfileComponent,
        TicketsListComponent
    ]
})
export class ComponentsModule {}