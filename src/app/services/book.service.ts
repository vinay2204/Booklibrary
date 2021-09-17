import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {BookDetailsModel} from '../model/book.model';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  show: any;
  constructor(private httpClient: HttpClient) {}

  getBookList(): Observable<BookDetailsModel[]> {
    return this.httpClient.get<BookDetailsModel[]>(
      '../assets/mock-data/book-details.json'
    );
  }
}
