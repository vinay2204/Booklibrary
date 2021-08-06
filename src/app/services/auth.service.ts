import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setCookies(userModel:UserModel){
   userModel.userName="Rajan",
   userModel.isAdmin =true
  }
}
