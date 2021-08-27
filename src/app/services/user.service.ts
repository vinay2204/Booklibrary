import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  cookie: any;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      '../assets/mock-data/user-details.json'
    );
  }
}
