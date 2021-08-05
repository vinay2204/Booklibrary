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



@NgModule({
  declarations: [AppComponent, LoginComponent, LoginReactiveComponent, DashboardComponent],
  imports:
   [BrowserModule,
     AppRoutingModule,
      FormsModule,
      HttpClientModule,
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
    
    ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
