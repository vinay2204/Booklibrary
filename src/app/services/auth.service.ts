import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserModel } from '../model/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cookies: any;
 

  constructor(
    private cookieService: CookieService)
    {}
   

  getCookie(){
    let userModel: UserModel = new UserModel();
    userModel.userName = this.cookieService.check("username")? this.cookieService.get("username"):'';
    userModel.isAdmin =this.cookieService.check('isadmin') ? JSON.parse(this.cookieService.get ("isadmin")): false;
    return userModel;

  }

  setCookies(user:UserModel) {
    this.cookieService.set('username', user.userName);
    this.cookieService.set('isadmin',user.isAdmin.toString());

  }
  

    
}
