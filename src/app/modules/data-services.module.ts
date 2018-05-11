import { NgModule } from "@angular/core";
import { UserDataService } from "../services/data/user-data.service";
import { TicketDataService } from "../services/data/ticket-data.service";

@NgModule({
    providers: [
        UserDataService,
        TicketDataService
    ]
})
export class DataServicesModule {}