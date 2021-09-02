import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookDetailsModel } from '../model/book.model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
