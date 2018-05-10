import { NgModule } from "@angular/core";
import { CommonsModule } from "./commons.module";
import { LoginComponent } from "../components/login/login.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "../components/user-profile/user-profile.component";

@NgModule({
	imports: [
        RouterModule,
        CommonsModule
    ],
    declarations: [
        LoginComponent,
        NavBarComponent,
        UserProfileComponent
    ]
})
export class ComponentsModule {}