import { NgModule } from "@angular/core";
import { UserDataService } from "../services/data/user-data.service";

@NgModule({
    providers: [
        UserDataService,
    ]
})
export class DataServicesModule {}