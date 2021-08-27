import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BookDetailsModel } from '../model/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  bookDetail: BookDetailsModel = new BookDetailsModel();
  bookService: any;

  constructor(
    private activatedRouteSnapshots: ActivatedRouteSnapshot,

  ) { }
  
 
  ngOnInit(): void {
    this.getBookList()

    
  }
  getBookList(){
    this.bookService.getBookList().subscribe((this.bookDetail)); 
    
  }

}
