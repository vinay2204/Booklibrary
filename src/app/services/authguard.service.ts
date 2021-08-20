import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { NotifactionService } from '../shared/notifaction.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class Authguard implements CanActivate {
  constructor(
    private notificationservice: NotifactionService,
    private router: Router,
    private authservice: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )
   {
    let user: UserModel = this.authservice.getCookie();
    let requestedPage:string = state.url.split("/")[1];
    if (user && user.userName !== '') {
      if(requestedPage == "pagenotfound"){
        return true;
      }
      if(!user.isAdmin){
     
        this.notificationservice.error('this user is not authorise to view this page');
        this.router.navigate(['/accessdenied']);
      }
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: state.url,
        },
      });
      return false;
    }
    
  }
}
