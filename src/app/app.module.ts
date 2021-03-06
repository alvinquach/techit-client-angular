import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components.module';
import { DataServicesModule } from './modules/data-services.module';
import { AuthService, localStorageJwtKey } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonsModule } from './modules/commons.module';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { TitleService } from './services/title.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(localStorageJwtKey),
        whitelistedDomains: [environment.serverHostName],
        blacklistedRoutes: [new RegExp(`${environment.serverHostName}\/login*`)]
      }
    }),
    AppRoutingModule,
    CommonsModule,
    ComponentsModule,
    DataServicesModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
