import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Authguard } from './services/authguard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BookhubComponent } from './bookhub/bookhub.component';

import { DeactivateGuard } from './deactivate.guard';
import { BookItemComponent } from './book-item/book-item.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BookRecordComponent } from './book-record/book-record.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [Authguard],
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'book-item',
    component: BookItemComponent,
  },
  {
    path: 'book-record',
    component: BookRecordComponent,
  },
  {
    path: 'pagenotfound',
    component: PageNotFoundComponent,
    canActivate: [Authguard],
  },
  {
    path: 'accessdenied',
    component: AccessDeniedComponent,
  },
  {
    path: 'bookhub',
    component: BookhubComponent,
  },
  {
    path: '**',
    redirectTo: '/pagenotfound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
