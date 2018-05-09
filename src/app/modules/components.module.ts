import { NgModule } from "@angular/core";
import { CommonsModule } from "./commons.module";
import { LoginComponent } from "../components/login/login.component";

@NgModule({
	imports: [
        CommonsModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class ComponentsModule {}