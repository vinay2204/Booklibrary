import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { NotifactionService } from '../shared/notifaction.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userModel: UserModel = new UserModel();
  returnUrl: string = '/';

  constructor(
    private userService: UserService,
    private notifactionService: NotifactionService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onUserFormSubmit() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      if (
        users.filter(
          (user) =>
            user.userName == this.userModel.userName &&
            user.password == this.userModel.password
        ).length > 0
      ) {
        this.notifactionService.success(
          `${this.userModel.userName} logged in Successfully.`
        );
        this.authService.setCookies(
          users.filter(
            (user) =>
              user.userName == this.userModel.userName &&
              user.password == this.userModel.password
          )[0]
        );
        this.router.navigate([this.returnUrl]);
      } else {
        this.notifactionService.error('User login failed');
      }
    });
  }
}

function username(username: any) {
  throw new Error('Function not implemented.');
}

function s(s: any) {
  throw new Error('Function not implemented.');
}
