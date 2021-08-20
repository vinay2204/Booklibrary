import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookhub',
  templateUrl: './bookhub.component.html',
  styleUrls: ['./bookhub.component.css'],
})
export class BookhubComponent implements OnInit {
  userForm: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.userForm = false;
    console.log('yes i am here for you');
  }
}
