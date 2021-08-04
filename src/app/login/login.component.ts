import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userModel:UserModel = new UserModel();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

   onUserFormSubmit()
   {
    this.userService.getUsers().subscribe(users =>{console.log(users);
    });
    

  }
}
