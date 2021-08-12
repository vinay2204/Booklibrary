import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
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
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let user: UserModel = this.authservice.getCookie();
    if (user && user.userName !== '') {
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
