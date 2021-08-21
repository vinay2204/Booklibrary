import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BookhubComponent } from './bookhub/bookhub.component';
import { FirstSessionComponent } from './dashboard/first-session/first-session.component';
import { DeactivateGuard } from './deactivate.guard';



@NgModule({
  declarations: [AppComponent, LoginComponent, LoginReactiveComponent, DashboardComponent, PageNotFoundComponent, AccessDeniedComponent, BookhubComponent, FirstSessionComponent],
  imports:
   [BrowserModule,
     AppRoutingModule,
      FormsModule,
      HttpClientModule,
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
    
    ],
  providers: [ CookieService,
    DeactivateGuard,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
