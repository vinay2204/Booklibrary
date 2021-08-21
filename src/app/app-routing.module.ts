import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Authguard } from './services/authguard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BookhubComponent } from './bookhub/bookhub.component';
import { FirstSessionComponent } from './dashboard/first-session/first-session.component';
import { DeactivateGuard } from './deactivate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent, canDeactivate :[DeactivateGuard]
  },
 
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate:[Authguard],
    
 
  },
  {
    path: 'firstsection',
    component:FirstSessionComponent,canDeactivate :[DeactivateGuard]
  },
  {path:'pagenotfound',
  component : PageNotFoundComponent,canActivate:[Authguard]
},
{
  path: 'accessdenied',
  component : AccessDeniedComponent
},
{
  path :'bookhub',
  component: BookhubComponent
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
