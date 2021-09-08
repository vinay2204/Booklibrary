import { ActivatedRoute, Router } from '@angular/router';
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
  color ='';
 
  firstBook : any;

  constructor(
    private bookService: BookService,
    private router :Router,
    private activatedRoute: ActivatedRoute,

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

    this.firstBook = this.books.find(x=> x.bookId == '1')
    

  }

  edit(){
    
  this.router.navigate(['/book-record'])
    
 
  }
  
}
