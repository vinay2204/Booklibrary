import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BookhubComponent } from './bookhub/bookhub.component';

import { DeactivateGuard } from './deactivate.guard';
import { HeaderComponent } from './header/header.component';
import { BookItemComponent } from './book-item/book-item.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { HighlightDirective } from './shared/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    BookhubComponent,
  
    HeaderComponent,
    BookItemComponent,
    AboutComponent,
    BooksComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CookieService, DeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
