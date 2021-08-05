import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { NotifactionService } from '../shared/notifaction.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userModel:UserModel = new UserModel();
  constructor(private userService: UserService , private notiService:NotifactionService, private router:Router ) {}

  ngOnInit(): void {}

   onUserFormSubmit()
   {
    this.userService.getUsers().subscribe(users =>{console.log(users);
      if(users.filter(user =>user.userName == this.userModel.userName).length>0)
      {
        this.notiService.success(`${this.userModel.userName} logged in Successfully.`);
        this.router.navigate(["/dashboard"]);
        
      }
      else{this.notiService.error("User login failed")} 
    });
    

  }
}
