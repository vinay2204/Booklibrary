import { Component, Input, OnInit } from '@angular/core';
import { BookDetailsModel } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-record',
  templateUrl: './book-record.component.html',
  styleUrls: ['./book-record.component.css']
})
export class BookRecordComponent implements OnInit {
  books : BookDetailsModel[] = []

  
  constructor(
    private bookService: BookService,
  ) { }

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
