import { NgModule } from "@angular/core";
import { 
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
} from "@angular/material";

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
    ]
})
export class MaterialModule {}