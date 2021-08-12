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



@NgModule({
  declarations: [AppComponent, LoginComponent, LoginReactiveComponent, DashboardComponent, PageNotFoundComponent, AccessDeniedComponent],
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
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
