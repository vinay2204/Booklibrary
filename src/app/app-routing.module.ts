import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Authguard } from './services/authguard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

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
    component: DashboardComponent, canActivate:[Authguard]
  },
  {path:'pagenotfound',
  component : PageNotFoundComponent,canActivate:[Authguard]
},
{
  path: 'accessdenied',
  component : AccessDeniedComponent
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
