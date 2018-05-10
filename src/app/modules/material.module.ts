import { NgModule } from "@angular/core";
import { 
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatTooltipModule,
} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
    imports: [
        // CdkTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatTableModule,
        MatTooltipModule,
    ],
    exports: [
        // CdkTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatTableModule,
        MatTooltipModule,
    ]
})
export class MaterialModule {}