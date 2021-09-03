import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { BookDetailsModel } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  books: BookDetailsModel[] = [];
  color ='yellow';
  constructor(
    private bookService: BookService,
    

  ) 
  { }

  ngOnInit(): void {
    this.getBookList();
  }
  getBookList() {
    this.bookService.getBookList().subscribe((books) =>{
      console.log(books);
      this.books = books;
    })
  }
  
}
