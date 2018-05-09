import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule
    ]
  })
  export class CommonsModule {}